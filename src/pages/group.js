import "./group.css";

const Group = () => {
  return (
    <div className="rectangle-parent">
      <div className="group-child" />
      <div className="program-rewardz">
        <b className="key-highlights">Key Highlights</b>
        <div className="card-1">
          <div className="industry-standard-courses-container">
            <p className="industry-standard">Industry Standard</p>
            <p className="industry-standard">Courses</p>
          </div>
          <img className="intern-icon" alt="" src="/intern.svg" />
        </div>
        <div className="card-11">
          <div className="industry-standard-courses-container1">
            <p className="industry-standard">Guranteed Certification</p>
            <p className="industry-standard">on Completion</p>
          </div>
          <img className="intern-icon1" alt="" src="/intern.svg" />
        </div>
        <div className="card-7">
          <div className="industry-standard-courses">Guranteed Internship</div>
          <img className="intern-icon1" alt="" src="/intern.svg" />
        </div>
        <div className="card-9">
          <div className="industry-standard-courses-container2">
            <p className="industry-standard">24x7 Support</p>
            <p className="industry-standard">Over Chat</p>
          </div>
          <img className="intern-icon1" alt="" src="/intern.svg" />
        </div>
        <div className="card-10">
          <div className="industry-standard-courses1">Personal Mentor</div>
          <img className="intern-icon1" alt="" src="/intern.svg" />
        </div>
        <img className="mentorship-icon" alt="" src="/mentorship.svg" />
        <img className="chat-icon" alt="" src="/chat@2x.png" />
        <img className="suitcase-icon" alt="" src="/suitcase.svg" />
        <img className="icon" alt="" src="/icon@2x.png" />
        <div className="card-91">
          <div className="industry-standard-courses-container">
            <p className="industry-standard">Industry Standard</p>
            <p className="industry-standard">Projects</p>
          </div>
          <img className="intern-icon1" alt="" src="/intern.svg" />
        </div>
        <img className="skill-icon" alt="" src="/skill@2x.png" />
      </div>
      <b className="how-does-the">How does the Internship Program works ?</b>
      <div className="learn-at-your">
        <img className="learn-at-your-child" alt="" />
        <img className="learn-at-your-item" alt="" src="/frame-18.svg" />
        <img className="learn-at-your-inner" alt="" />
        <img className="line-icon" alt="" />
        <img className="learn-at-your-child1" alt="" />
        <img className="frame-icon" alt="" src="/frame-18.svg" />
        <img className="learn-at-your-child2" alt="" src="/frame-18.svg" />
        <img className="learn-at-your-child3" alt="" src="/frame-18.svg" />
        <img className="learn-at-your-child4" alt="" src="/frame-23.svg" />
        <div className="learn-from-our">
          Learn from our structured pre recorded courses made by experts to meet
          industry needs
        </div>
        <div className="live-doubt-solving">{`1:1 live doubt solving support available throughout the day to clear your doubts instantly `}</div>
        <div className="build-major-projects">{`Build major projects which makes your resume stand apart `}</div>
        <div className="get-guaranteed-paid">
          Get guaranteed paid internships after completion of the program along
          with course completion certificates
        </div>
        <div className="personal-mentors-to">
          Personal mentors to guide and help you throughout your journey as a
          friend
        </div>
      </div>
      <div className="apply-now-button">
        <div className="apply-now-for">Apply now for ₹ 2999</div>
      </div>
    </div>
  );
};

export default Group;
