"use client";
import { useState, useMemo } from "react";
import { ResumeIframeCSR } from "components/Resume/ResumeIFrame";
import { ResumePDF } from "components/Resume/ResumePDF";
import {
  ResumeControlBarCSR,
  ResumeControlBarBorder,
} from "components/Resume/ResumeControlBar";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { useAppSelector } from "lib/redux/hooks";
import { selectResume } from "lib/redux/resumeSlice";
import { selectSettings } from "lib/redux/settingsSlice";
import { DEBUG_RESUME_PDF_FLAG } from "lib/constants";
import {
  useRegisterReactPDFFont,
  useRegisterReactPDFHyphenationCallback,
} from "components/fonts/hooks";
import { NonEnglishFontsCSSLazyLoader } from "components/fonts/NonEnglishFontsCSSLoader";
import ResumeTimeline from "./ResumeTimeline"; // Import the ResumeTimeline component
import './styles.css'
export const Resume = () => {
  const [scale, setScale] = useState(0.8);
  const [showTimelineModal, setShowTimelineModal] = useState(false); // State to manage modal visibility
  const [modalFullscreen, setModalFullscreen] = useState(false); // State to manage modal fullscreen

  const resume = useAppSelector(selectResume);
  const settings = useAppSelector(selectSettings);
  const document = useMemo(
    () => <ResumePDF resume={resume} settings={settings} isPDF={true} />,
    [resume, settings]
  );

  useRegisterReactPDFFont();
  useRegisterReactPDFHyphenationCallback(settings.fontFamily);

  const toggleTimelineModal = () => {
    setShowTimelineModal(!showTimelineModal); // Toggle modal visibility
  };

  const toggleFullscreen = () => {
    setModalFullscreen(!modalFullscreen); // Toggle fullscreen mode
  };

  const closeModal = () => {
    setShowTimelineModal(false); // Close modal
    setModalFullscreen(false); // Reset fullscreen mode on close
  };

  return (
    <>
      <NonEnglishFontsCSSLazyLoader />
      <div className="relative flex justify-center md:justify-start">
        <FlexboxSpacer maxWidth={50} className="hidden md:block" />
        <div className="relative">
          <section className="h-[calc(100vh-var(--top-nav-bar-height)-var(--resume-control-bar-height))] overflow-scroll md:p-[var(--resume-padding)]">
            <ResumeIframeCSR
              documentSize={settings.documentSize}
              scale={scale}
              enablePDFViewer={DEBUG_RESUME_PDF_FLAG}
            >
              <ResumePDF
                resume={resume}
                settings={settings}
                isPDF={DEBUG_RESUME_PDF_FLAG}
              />
            </ResumeIframeCSR>
          </section>
          <ResumeControlBarCSR
            scale={scale}
            setScale={setScale}
            documentSize={settings.documentSize}
            document={document}
            fileName={resume.profile.name + " - Resume"}
          />
        </div>
        <ResumeControlBarBorder />
      </div>

      {/* Button to toggle Resume Timeline Modal */}
      <div className="max-w-screen-lg mx-auto mt-8">
        <button
          onClick={toggleTimelineModal}
          className="btn-primary"
        >
          {showTimelineModal ? "Close Timeline" : "Open Timeline"}
        </button>
        {showTimelineModal && (
          <div className={`modal ${modalFullscreen ? 'fullscreen' : ''}`}>
            <div className="modal-content">
              <div className="modal-header">
                <h2>Resume Timeline</h2>
                <div className="modal-buttons">
                  <button onClick={toggleFullscreen}>
                    {modalFullscreen ? 'Exit Fullscreen' : 'Expand'}
                  </button>
                  <button onClick={closeModal}>Close</button>
                </div>
              </div>
              <div className="modal-body">
                <ResumeTimeline resumeData={resume} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
