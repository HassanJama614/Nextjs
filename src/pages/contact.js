import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css'; // Specific styles for this page

const projectsData = [
  {
    id: 1,
    title: 'Awesome Project One',
    description: 'A brief description of this amazing project that solves a real-world problem.',
    imgSrc: '/images/project1.png', // Path relative to `public`
    link: 'https://github.com/yourusername/project-one'
  },
  {
    id: 2,
    title: 'Cool App Two',
    description: 'This project showcases my skills in Next.js and React. It is very cool.',
    imgSrc: '/images/project2.png', // Path relative to `public`
    link: 'https://github.com/yourusername/project-two'
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Projects - Portfolio</title>
        <meta name="description" content="Check out my latest projects" />
      </Head>

      <h1 className={styles.pageTitle}>My Projects</h1>
      <div className={styles.projectsGrid}>
        {projectsData.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}