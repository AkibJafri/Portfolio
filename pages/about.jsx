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
          <span className={styles.key}>"name"</span>: "Akib Jafri",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"age"</span>:{' '}
          {differenceInYears(new Date(), new Date('2002-07-18'))},
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"location"</span>: "Mumbai, India",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"education"</span>: "BSC Information
          Technology",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"degree-college"</span>: "Rizvi College
          Of Arts Science And Commerce",
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={styles.key}>"hobbies"</span>:
          <span className={styles.bracket}>[</span>
          "Coding", "Biking", "Lifting"
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
