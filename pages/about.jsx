import { differenceInYears, format } from 'date-fns'
import styles from '../styles/AboutPage.module.css'
const AboutPage = () => {
  return (
    <>
      <h3 className={styles.heading}>A Little Bit About Me</h3>
      {/* json like style */}
      <div>
        <p className={styles.bracket}>{'{'}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"name"</span>: "Sohail Jafri",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"age"</span>:{' '}
          {differenceInYears(new Date(), new Date('2002-04-27'))},
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"location"</span>: "Mumbai, India",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"education"</span>: "B.E in Information
          Technology",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"degree-college"</span>: "Datta Meghe
          College of Engineering",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"diploma-college"</span>: "Vidyalankar
          Polytechnic",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"hobbies"</span>:
          <span className={styles.bracket}>[</span>
          "Coding", "Biking", "Lifting", "Reading", "Anime"
          <span className={styles.bracket}>]</span>
        </p>
        <p className={styles.bracket}>{'}'}</p>
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  }
}

export default AboutPage
