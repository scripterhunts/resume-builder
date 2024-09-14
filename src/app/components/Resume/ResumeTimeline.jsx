import React from 'react';
import './styles.css'; // Make sure to update the CSS file

const ResumeTimeline = ({ resumeData }) => {
  if (!resumeData) {
    return <div>No resume data available.</div>;
  }

  const { educations = [], workExperiences = [], projects = [], skills = {} } = resumeData;

  // Sorting function
  const sortByDateDescending = (items) => {
    return items.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;

      if (a.type === 'work' && b.type === 'education') return -1;
      if (a.type === 'education' && b.type === 'work') return 1;

      return 0;
    });
  };

  // Combine all entries into a single array and sort by date
  const allEntries = sortByDateDescending([
    ...educations.map((entry) => ({ ...entry, type: 'education' })),
    ...workExperiences.map((entry) => ({ ...entry, type: 'work' })),
    ...projects.map((entry) => ({ ...entry, type: 'project' }))
  ]);

  const getRandomColorClass = (index) => {
    const colors = ['color-0', 'color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
    return colors[index % colors.length];
  };

  const handleExpand = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="resume-container">
      {/* Skills Section */}
      {skills.descriptions && skills.descriptions.length > 0 && (
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-container">
            {skills.descriptions.map((skill, index) => (
              <div key={index} className={`skill-card ${getRandomColorClass(index)}`}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timeline */}
      {allEntries.length > 0 ? (
        <div className="timeline">
          <div className="timeline-center-line"></div>
          {allEntries.map((entry, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} onClick={() => handleExpand(entry.link)}>
              <div className="timeline-content">
                <div className="timeline-year">{entry.date}</div>
                <div className={`timeline-card ${entry.type}`}>
                  <h3>{entry.type === 'education' ? 'Education' : entry.type === 'work' ? 'Work Experience' : 'Project'}</h3>
                  <h4>{entry.school || entry.company || entry.project}</h4>
                  <p>{entry.degree || entry.jobTitle || (entry.descriptions && entry.descriptions.join(' '))}</p>
                  {entry.descriptions && entry.descriptions.length > 0 && (
                    <div className="sub-cards">
                      {entry.descriptions.map((description, descIndex) => (
                        <div key={descIndex} className="sub-card">
                          {description}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No timeline entries available.</div>
      )}
    </div>
  );
};

export default ResumeTimeline;