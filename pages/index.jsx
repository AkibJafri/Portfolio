import Link from 'next/link'
import Illustration from '../components/Illustration'
import styles from '../styles/HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>SOLUTIONS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Akib Jafri</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <div className={styles.btnGroup}>
              <Link href="/experience">
                <button className={styles.outlined}>Experience</button>
              </Link>
              <Link href="/projects">
                <button className={styles.outlined}>Projects</button>
              </Link>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
              <a href="/Akib_Jafri_Rasume.pdf" target="_blank">
                <button className={styles.button}>View Resume</button>
              </a>
            </div>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  }
}
