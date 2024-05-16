import FrameComponent6 from "./frame-component6";
import "./frame-component5.css";

const FrameComponent5 = () => {
  return (
    <section className="course-curriculum-wrapper">
      <div className="course-curriculum">
        <div className="curriculum-content">
          <div className="curriculum-description">
            <div className="newbiefriendly-wrapper">
              <button className="newbiefriendly">
                <div className="newbie-friendly">
                  DATASCIENCE COURSE LEARNING PATH
                </div>
              </button>
            </div>
            <h1 className="data-science-course-container">
              <span className="data-science">Data Science</span>
              <span> Course Curriculum</span>
            </h1>
          </div>
        </div>
        <div className="course-options">
          <FrameComponent6
            c="C++"
            learnCForStrongProgrammin="Learn C++ for strong programming fundamentals."
          />
          <FrameComponent6
            c="MERN Stack"
            learnCForStrongProgrammin="Master the MERN stack for high-demand projects."
            propPadding="26px 28px 28px"
            propBorderTop="1px solid #e5e5e8"
          />
          <FrameComponent6
            c={`Data Structure & Algorithm`}
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="26px 28px 28px"
            propBorderTop="1px solid #e5e5e8"
          />
          <FrameComponent6
            c="Competitve Programming"
            learnCForStrongProgrammin="Excel in Data Structures and Algorithms for interview success."
            propPadding="26px 28px 28px"
            propBorderTop="1px solid #e5e5e8"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
