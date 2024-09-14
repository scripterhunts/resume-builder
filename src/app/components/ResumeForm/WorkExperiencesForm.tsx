import { useState } from "react";
import { Form, FormSection } from "components/ResumeForm/Form";
import {
  Input,
  BulletListTextarea,
} from "components/ResumeForm/Form/InputGroup";
import type { CreateHandleChangeArgsWithDescriptions } from "components/ResumeForm/types";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import {
  changeWorkExperiences,
  selectWorkExperiences,
  changeWorkExperienceDescriptions,
} from "lib/redux/resumeSlice";
import type { ResumeWorkExperience } from "lib/redux/types";
import OpenAI from 'openai';

const OPENAI_API_KEY =  process.env.OPENAI ;
const openai = new OpenAI({ apiKey: OPENAI_API_KEY , dangerouslyAllowBrowser: true });

export const WorkExperiencesForm = () => {
  const workExperiences = useAppSelector(selectWorkExperiences);
  const dispatch = useAppDispatch();
const [jobProfile, setJobProfile] = useState<string>('');
const [generatedTexts, setGeneratedTexts] = useState<string[]>(new Array(workExperiences.length).fill(''));
  // State for loading indicators, one for each work experience entry
  const [isLoading, setIsLoading] = useState<boolean[]>(new Array(workExperiences.length).fill(false));
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const showDelete = workExperiences.length > 1;

  const handleGenerateWithAI = async (idx: number) => {
    // Set loading state to true for the specific work experience entry
    setIsLoading(prevState => {
      const newState = [...prevState];
      newState[idx] = true;
      return newState;
    });

    try {
      const jobTitle = workExperiences[idx].jobTitle; // Get job title from current work experience
      setJobProfile(jobTitle); // Set job title to jobProfile state

      const promptContent = `Generate the work experience for the description section of resume for the job profile ${jobTitle}. Provide a detailed description of the work involved in a single paragrapgh in 60 words.`;

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            "role": "user",
            "content": promptContent
          }
        ],
        temperature: 0.7,
        max_tokens: 164,
        top_p: 1,
      });

const generatedDescription = response.choices.map(choice => choice.message.content || '');
      // Show popup with generated responses
      setGeneratedTexts(generatedDescription);
      setShowPopup(true);
      setSelectedIdx(idx); // Remember which work experience generated these responses
    } catch (error) {
      console.error('Error generating text with OpenAI:', error);
      // Handle error here (e.g., show error message)
      alert('Failed to generate description. Please try again.');
    } finally {
      // Set loading state back to false for the specific work experience entry
      setIsLoading(prevState => {
        const newState = [...prevState];
        newState[idx] = false;
        return newState;
      });
    }
  };

const handleSelectResponse = (responseIdx: number) => {
  if (selectedIdx !== null && selectedIdx >= 0 && selectedIdx < workExperiences.length) {
    dispatch(changeWorkExperienceDescriptions({ 
      idx: selectedIdx, 
      descriptions: [generatedTexts[responseIdx]] 
    }));
    setShowPopup(false);
    setSelectedIdx(null); // Reset selectedIdx after using it
  } else {
    console.error('Invalid selectedIdx:', selectedIdx);
    // Optionally, show an error message to the user
  }
};
  return (
    <div>
      <Form form="workExperiences" addButtonText="Add Job">
        {workExperiences.map(({ company, jobTitle, date, descriptions }, idx) => {
          const handleWorkExperienceChange = (
            ...[
              field,
              value,
            ]: CreateHandleChangeArgsWithDescriptions<ResumeWorkExperience>
          ) => {
            dispatch(changeWorkExperiences({ idx, field, value } as any));
          };

          const showMoveUp = idx !== 0;
          const showMoveDown = idx !== workExperiences.length - 1;

          return (
            <FormSection
              key={idx}
              form="workExperiences"
              idx={idx}
              showMoveUp={showMoveUp}
              showMoveDown={showMoveDown}
              showDelete={showDelete}
              deleteButtonTooltipText="Delete job"
            >
              <Input
                label="Company"
                labelClassName="col-span-full"
                name="company"
                placeholder="Khan Academy"
                value={company}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="Job Title"
                labelClassName="col-span-4"
                name="jobTitle"
                placeholder="Software Engineer"
                value={jobTitle}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="Date"
                labelClassName="col-span-2"
                name="date"
                placeholder="Jun 2022 - Present"
                value={date}
                onChange={handleWorkExperienceChange}
              />
              <div style={{ display: "flex", justifyContent: "right", whiteSpace: 'nowrap', width: '37vw', marginBottom: '-30%' }}>
                <button
                  style={{border: '1px solid' , borderRadius:'10px' , padding: '5px'}}
                  onClick={() => handleGenerateWithAI(idx)}
                  disabled={isLoading[idx]} // Disable button during loading of this specific work experience
                >
                  {isLoading[idx] ? 'Generating...' : 'Generate with AI'}
                </button>
                {isLoading[idx] && (
                  <img
                    src="https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif" // Replace with actual loader image
                    alt="Loading..."
                    style={{ height: '24px', width: '24px', marginLeft: '10px' }}
                  />
                )}
              </div>
              <BulletListTextarea
                label="Description"
                labelClassName="col-span-full"
                name="descriptions"
                placeholder="Bullet points"
                value={descriptions}
                onChange={handleWorkExperienceChange}
              />
            </FormSection>
          );
        })}
      </Form>

      {/* Popup to display generated responses */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Select a Response</h3>
            {generatedTexts.map((text, index) => (
              <div key={index}>
                <button onClick={() => handleSelectResponse(index)}>Select</button>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
