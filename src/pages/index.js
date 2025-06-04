import Head from 'next/head';
import Image from 'next/image'; // Import Next.js Image component
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio - Home</title>
        <meta name="description" content="Welcome to my personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">My Portfolio!</a>
        </h1>

        <p className={styles.description}>
          Hi, I'm [Your Name], a passionate developer.
        </p>

        <div className={styles.profileImageContainer}>
          <Image
            src="/images/profile.jpg" // Path relative to the `public` folder
            alt="My Profile Picture"
            width={200} // Provide intrinsic width of the image
            height={200} // Provide intrinsic height of the image
            className={styles.profileImage}
          />
        </div>
      </main>
    </div>
  );
}