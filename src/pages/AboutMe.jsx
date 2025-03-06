import profileImage from '../assets/profile.jpg';

const AboutMe = () => (
  <section>
    <h2>About Me</h2>
    <img src={profileImage} alt="Profile" />
    <p>
      Hi! I'm [Your Name], a web developer with a passion for creating interactive applications and experiences on the web.
    </p>
  </section>
);

export default AboutMe;