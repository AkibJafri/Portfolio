import React from 'react'
import { differenceInMonths, format } from 'date-fns'
import styles from '../styles/Experience.module.css'

const experience = [
  {
    company: 'Appvent',
    role: 'Front-end Software Developer',
    startDate: new Date('2023-05-21'),
    endDate: new Date('2024-4-20'),
    currentlyWorking: false,
    skills: [
      'HTML',
      'CSS',
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Redux',
      'Zustand',
      'restfulApi',
      'Api Integration',
    ],
    tasks: [
      {
        title: 'Building And maintaining',
        description: `Primarily focused on Building Front-end Pages with React.js And
				Chakra UI, contributing to multipleweb application projects.`,
      },
      {
        title: 'API Integration',
        description: `Designed and deployed an e-commerce application for homemade candles, featuring custom integrations with Amazon and Flipkart for order processing and tracking. Implemented a personalized opt-in and opt-out notification system using Web Push and native browser APIs, alongside email functionality integrated through Mailjet.`,
      },
      {
        title: 'Continuously Improvments',
        description: `Continuously learning and improving skills in both frontend and
				backend technologies to enhance overall proficiency and
				projectcontribution.`,
      },
    ],
  },
]

export default function Experience() {
  return (
    <div className={styles.container}>
      <h3>Experience</h3>
      {experience.map((exp) => (
        <div className={styles.card}>
          <h2 className={styles.company}>{exp.company}</h2>
          <h3 className={styles.role}>{exp.role}</h3>
          <small className={styles.duration}>
            {format(exp.startDate, 'MMM yyyy')} -{' '}
            {exp.currentlyWorking ? 'Present' : format(exp.endDate, 'MMM yyyy')}{' '}
            | {differenceInMonths(exp.endDate, exp.startDate)} Months
          </small>
          <div className={styles.skills}>
            {exp.skills.map((skill) => (
              <span className={styles.skill}>{skill}</span>
            ))}
          </div>

          <ul className={styles.tasks}>
            {exp.tasks.map((task) => (
              <li>
                <h5 className={styles.taskTitle}>{task.title}</h5>
                <p className={styles.taskDescription}>{task.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Experience' },
  }
}
