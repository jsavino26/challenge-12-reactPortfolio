import resumePDF from '../assets/resume.pdf';

const Resume = () => (
  <section>
    <h2>Resume</h2>
    <a href={resumePDF} download>Download My Resume</a>
    <h3>Proficiencies</h3>
    <ul>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>PostgreSQL</li>
      {/* Add more as needed */}
    </ul>
  </section>
);

export default Resume;