import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navigation">
      <div className="logo-container-parent">
        <div className="logo-container">
          <div className="logo">LOGO</div>
        </div>
        <div className="image-446-wrapper">
          <div className="image-446" />
        </div>
        <div className="user-actions">
          <div className="authentication">
            <div className="login">Login</div>
          </div>
          <button className="solidbuttom1">
            <div className="signup">Signup</div>
          </button>
        </div>
      </div>
      <div className="information">
        <div className="overview-container">
          <div className="overview">Overview</div>
        </div>
        <div className="curriculum">Curriculum</div>
        <div className="refund">Refund</div>
        <div className="testimonials">Testimonials</div>
      </div>
    </header>
  );
};

export default NavBar;
