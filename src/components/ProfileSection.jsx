import "./ProfileSection.css";
import profileImage from "../assets/profile.png";

function ProfileSection() {
  return (
    <div className="container">

      <div className="hero">
        <img src={profileImage} alt="profile" />
        <h1>Gaurav Kumar</h1>
        <p>Web Developer</p>
      </div>

      <div className="about">
        <h2>About Me</h2>
        <p>
          I'm a Web Developer skilled in JavaScript, React.js and Firebase with knowledge of Linux and cybersecurity.
          I enjoy building secure, scalable and user-friendly web applications.
          I focus on creating responsive and modern web interfaces while also integrating backend services and authentication systems.
          I have experience working with startups and production teams to deliver high-quality digital products.
        </p>
      </div>

      <div className="services">
        <h2>What I'm Doing</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Building modern and responsive websites using HTML, CSS, JavaScript, React.js and Firebase.</p>
          </div>

          <div className="card">
            <h3>Cyber Security</h3>
            <p>Knowledge of penetration testing and tools like Nmap, Wireshark and Burp Suite.</p>
          </div>

          <div className="card">
            <h3>Responsive Apps</h3>
            <p>Creating responsive UI components and scalable web apps across all devices.</p>
          </div>

          <div className="card">
            <h3>Video Editing</h3>
            <p>Editing promotional and social media videos with storytelling.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfileSection;