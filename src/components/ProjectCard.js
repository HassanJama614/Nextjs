import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, imgSrc, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imgSrc} alt={title} width={400} height={250} objectFit="cover" />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;