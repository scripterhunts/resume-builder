"use client";

import React, { useState, useEffect } from 'react';
import { OpenAI } from 'openai';
import axios from 'axios';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ResumeDropzone } from "components/ResumeDropzone";
import { Input } from "components/ResumeForm/Form/InputGroup";
import { deepClone } from "lib/deep-clone";
import { initialSettings } from "lib/redux/settingsSlice";
import { getHasUsedAppBefore, saveStateToLocalStorage } from "lib/redux/local-storage";

// Custom Modal Component
const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl max-h-[90vh] overflow-auto">
        {children}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-gray-200 rounded">Close</button>
      </div>
    </div>
  );
};

// Custom Button Component
const Button: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    {children}
  </button>
);

// Custom TextArea Component
const TextArea: React.FC<{ value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder: string; rows: number; className: string }> = (props) => (
  <textarea {...props} />
);

const OPENAI_API_KEY = "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";
const openai = new OpenAI({ apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true });

// ResumeData interface definition
interface ResumeData {
  profile: {
    name: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    url: string;
  };
  workExperiences: Array<{
    company: string;
    jobTitle: string;
    date: string;
    descriptions: string[];
  }>;
  educations: Array<{
    school: string;
    degree: string;
    gpa: string;
    date: string;
    descriptions: string[];
  }>;
  projects: Array<{
    project: string;
    date: string;
    descriptions: string[];
  }>;
  skills: {
    featuredSkills: Array<{
      skill: string;
      rating: number;
    }>;
    descriptions: string[];
  };
  custom: {
    descriptions: string[];
  };
}

export default function ImportResume() {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);
  const [linkedinProfileUrl, setLinkedinProfileUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [jobDescription, setJobDescription] = useState('');
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [tailoredResume, setTailoredResume] = useState<ResumeData | null>(null);
  const [showTailoredResume, setShowTailoredResume] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  function inputHandler(name: string, values: string) {
    setLinkedinProfileUrl(values);
  }

  async function handleContinueClick() {
    const bearerToken = "xkFke3aHyXFPacR1zLWA5A"; // Replace with your actual bearer token

    try {
      const response = await axios.get(
        `https://nubela.co/proxycurl/api/v2/linkedin?url=${linkedinProfileUrl}` +
          "&fallback_to_cache=on-error" +
          "&use_cache=if-present" +
          "&skills=include" +
          "&inferred_salary=include" +
          "&personal_email=include" +
          "&personal_contact_number=include" +
          "&twitter_profile_id=include" +
          "&facebook_profile_id=include" +
          "&github_profile_id=include" +
          "&extra=include" +
          "&bypass_cors=true",
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        }
      );

      console.log(response.data, "response");
      const userResponseData = response.data;

      const data = convertToDemoResume(userResponseData);
      setResumeData(data);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching LinkedIn data:', error);
      // Handle error (e.g., show error message to user)
    }
  }

  function convertToDemoResume(data: any): ResumeData {
    // Helper function to format dates
    function formatDate(start: any, end: any) {
      const startDate = start ? `${start.month}/${start.year}` : "";
      const endDate = end ? `${end.month}/${end.year}` : "Present";
      return `${startDate} - ${endDate}`;
    }

    const featureSkillEmptyArray = Array(6).fill({ skill: "", rating: 4 });

    const { accomplishment_projects, skills } = data;

    function convertToProjectData(inputData: any) {
      return (inputData || []).map((item: any) => ({
        project: item.title || "",
        date: item.starts_at ? `${item.starts_at.day}/${item.starts_at.month}/${item.starts_at.year}` : "",
        descriptions: [item.description || ""],
      }));
    }

    const profile = {
      name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      summary: data.summary || "",
      email: data.emails?.[0] || "",
      phone: data.phone_numbers?.[0] || "",
      location: `${data.city || ""}, ${data.state || ""}`.trim(),
      url: data.websites?.[0]?.url || "",
    };

    const workExperiences = (data.experiences || []).map((exp: any) => ({
      company: exp.company || "",
      jobTitle: exp.title || "",
      date: formatDate(exp.starts_at, exp.ends_at),
      descriptions: exp.description ? exp.description.split("\n") : [],
    }));

    const educations = (data.education || []).map((edu: any) => ({
      school: edu.school || "",
      degree: edu.degree_name || "",
      gpa: "",
      date: formatDate(edu.starts_at, edu.ends_at),
      descriptions: edu.field_of_study ? [edu.field_of_study] : [],
    }));

    const projects = convertToProjectData(accomplishment_projects);

    const skillsSection = {
      featuredSkills: featureSkillEmptyArray,
      descriptions: skills || [],
    };

    const custom = {
      descriptions: [],
    };

    return {
      profile,
      workExperiences,
      educations,
      projects,
      skills: skillsSection,
      custom,
    };
  }

  async function handleJobDescriptionSubmit() {
    if (!resumeData) return;

    try {
      const tailored = await tailorResumeWithAI(resumeData, jobDescription);
      setTailoredResume(tailored);
      setShowTailoredResume(true);
      const settings = deepClone(initialSettings);
      saveStateToLocalStorage({ resume: tailored, settings });
    } catch (error) {
      console.error('Error tailoring resume:', error);
      // Handle error (e.g., show error message to user)
    }
  }

  async function tailorResumeWithAI(resume: ResumeData, jobDescription: string): Promise<ResumeData> {
const prompt = `
  Given the following resume and job description for a Technical Writer position, please tailor the resume to better fit the job requirements. 
  Follow these specific instructions:
  1. Update the profile summary to highlight skills and experiences most relevant to technical writing and documentation.
  2. For each work experience:
     a. Keep the company name and date range as is.
     b. Change all job titles to variations of "Technical Writer" or closely related titles that align with the job description (e.g., "Documentation Specialist", "Content Developer", "Technical Documentation Writer").
     c. Modify the description of work and responsibilities to closely match the requirements for a Technical Writer position.
     d. Ensure each experience entry showcases unique skills and achievements relevant to technical writing and documentation.
     e. Tailor the bullet points of accomplishments to align with different aspects of the Technical Writer job requirements for each role.
     f. Make sure each work experience description is distinct and demonstrates a progression of skills related to technical writing and documentation.
  3. Adjust the skills section to prioritize those most relevant to technical writing and documentation.
  4. Update project descriptions to highlight aspects most relevant to technical writing and documentation.
  5. Ensure that all parts of the resume (summary, all job descriptions, skills, etc.) are tailored to the Technical Writer position, with each section offering unique value.
  6. Keep the overall structure the same, including the number of work experiences, and ensure all fields are filled (use empty strings if no data is available).
  7. For each work experience, provide at least 5-7 distinct bullet points that showcase different aspects of technical writing and documentation skills.

  Resume:
  ${JSON.stringify(resume, null, 2)}

  Job Description:
  ${jobDescription}

  Please provide the tailored resume in the exact same JSON structure as the original, maintaining all existing work experiences but with updated job titles and unique, tailored descriptions for each role, all focused on technical writing and documentation skills.
`;

const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-16k",
      messages: [{ role: "user", content: prompt }],
    });

    const tailoredResumeString = completion.choices[0].message.content;
    if (!tailoredResumeString) throw new Error("Failed to generate tailored resume");

    const parsedResume = JSON.parse(tailoredResumeString) as ResumeData;

    // Ensure all required fields are present and not undefined
    return {
      ...parsedResume,
      profile: {
        ...parsedResume.profile,
        email: parsedResume.profile.email || "",
        phone: parsedResume.profile.phone || "",
        location: parsedResume.profile.location || "",
        url: parsedResume.profile.url || "",
      },
    };
  }

  const handleSaveAndContinue = () => {
    if (tailoredResume) {
      router.push("/resume-builder");
    }
  };

  return (
    <main>
      <div className="mx-auto mt-14 max-w-3xl rounded-md border border-gray-200 px-10 py-10 text-center shadow-md">
        {!hasUsedAppBefore ? (
          <>
            <h1 className="text-lg font-semibold text-gray-900">
              Import data from an existing resume
            </h1>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
            {!hasAddedResume && (
              <>
                <OrDivider />
                <SectionWithHeadingAndCreateButton
                  heading="Don't have a resume yet?"
                  buttonText="Create from scratch"
                />
              </>
            )}
          </>
        ) : (
          <>
            {!hasAddedResume && (
              <>
                <SectionWithHeadingAndCreateButton
                  heading="You have data saved in browser from prior session"
                  buttonText="Continue where I left off"
                />
                <OrDivider />
              </>
            )}
            <h1 className="font-semibold text-gray-900">
              Override data with a new resume
            </h1>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
          </>
        )}
        <OrDivider />
        <div className="mt-5">
          <Input
            label="LinkedIn Url"
            name="linkedin-url"
            placeholder="Enter LinkedIn profile url"
            onChange={(name, value) => {
              inputHandler(name, value);
            }}
            value={linkedinProfileUrl}
          />
        </div>
        <div className="mt-5">
          <button
            onClick={handleContinueClick}
            className="outline-theme-blue rounded-full bg-sky-500 px-6 pb-2 pt-1.5 text-base font-semibold text-white"
          >
            Continue
          </button>
        </div>
      </div>

      {showPopup && (
        <Modal isOpen={showPopup} onClose={() => setShowPopup(false)}>
          <h2 className="text-lg font-semibold mb-4">Enter Job Description</h2>
          <TextArea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            rows={6}
            className="w-full mb-4"
          />
          <Button onClick={handleJobDescriptionSubmit}>
            Tailor Resume
          </Button>
        </Modal>
      )}

      {showTailoredResume && tailoredResume && (
        <Modal isOpen={showTailoredResume} onClose={() => setShowTailoredResume(false)}>
          <h2 className="text-lg font-semibold mb-4">Tailored Resume</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Profile</h3>
            <p><strong>Name:</strong> {tailoredResume.profile.name}</p>
            <p><strong>Summary:</strong> {tailoredResume.profile.summary}</p>
            <p><strong>Email:</strong> {tailoredResume.profile.email}</p>
            <p><strong>Phone:</strong> {tailoredResume.profile.phone}</p>
            <p><strong>Location:</strong> {tailoredResume.profile.location}</p>
            <p><strong>URL:</strong> {tailoredResume.profile.url}</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Work Experiences</h3>
            {tailoredResume.workExperiences.map((exp, index) => (
              <div key={index} className="mb-2">
                <p><strong>{exp.jobTitle}</strong> at {exp.company}</p>
                <p>{exp.date}</p>
                <ul>
{exp.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Education</h3>
            {tailoredResume.educations.map((edu, index) => (
              <div key={index} className="mb-2">
                <p><strong>{edu.degree}</strong> from {edu.school}</p>
                <p>{edu.date}</p>
                <ul>
                  {edu.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Projects</h3>
            {tailoredResume.projects.map((proj, index) => (
              <div key={index} className="mb-2">
                <p><strong>{proj.project}</strong></p>
                <p>{proj.date}</p>
                <ul>
                  {proj.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Skills</h3>
            <ul>
              {tailoredResume.skills.descriptions.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <Button onClick={handleSaveAndContinue}>
            Save and Continue to Resume Builder
          </Button>
        </Modal>
      )}
    </main>
  );
}

const OrDivider = () => (
  <div className="mx-[-2.5rem] flex items-center pb-6 pt-8" aria-hidden="true">
    <div className="flex-grow border-t border-gray-200" />
    <span className="mx-2 mt-[-2px] flex-shrink text-lg text-gray-400">or</span>
    <div className="flex-grow border-t border-gray-200" />
  </div>
);

const SectionWithHeadingAndCreateButton = ({
  heading,
  buttonText,
}: {
  heading: string;
  buttonText: string;
}) => {
  return (
    <>
      <p className="font-semibold text-gray-900">{heading}</p>
      <div className="mt-5">
        <Link
          href="/resume-builder"
          className="outline-theme-blue rounded-full bg-sky-500 px-6 pb-2 pt-1.5 text-base font-semibold text-white"
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
};
