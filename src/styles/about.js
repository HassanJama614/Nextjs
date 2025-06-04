import Head from 'next/head';
import styles from '../styles/Page.module.css'; // A generic style for simple pages

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - My Portfolio</title>
        <meta name="description" content="Learn more about me" />
      </Head>

      <h1 className={styles.title}>About Me</h1>
      <p className={styles.content}>
        Hello! I'm [Your Name], a [Your Profession/Student] based in [Your City/Country].
        I have a passion for [Your Interests/Skills, e.g., web development, UI/UX design, problem-solving].
      </p>
      <p className={styles.content}>
        I enjoy creating intuitive, efficient, and user-friendly applications.
        When I'm not coding, I enjoy [Your Hobbies].
      </p>
    </div>
  );
}