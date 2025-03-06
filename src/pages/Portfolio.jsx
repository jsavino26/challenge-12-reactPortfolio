import Project from '../components/Project';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
// Import other project images as needed

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="projects">
      <Project
        title="Project One"
        image={project1}
        deployedLink="https://deployedlink1.com"
        repoLink="https://github.com/yourusername/project-one"
      />
      <Project
        title="Project Two"
        image={project2}
        deployedLink="https://deployedlink2.com"
        repoLink="https://github.com/yourusername/project-two"
      />
      {/* Repeat <Project /> for all six projects */}
    </div>
  </section>
);

export default Portfolio;