import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: 'src/assets/_MG_2120.JPG',
    deployedLink: 'https://example.com/project1',
    repoLink: 'https://github.com/username/project1'
  },
  {
    title: 'Project 2',
    image: 'src/assets/_MG_2121.JPG',
    deployedLink: 'https://example.com/project2',
    repoLink: 'https://github.com/username/project2'
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;