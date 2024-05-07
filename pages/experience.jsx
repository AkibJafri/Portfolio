import React from 'react'
import { differenceInMonths, format } from 'date-fns'
import styles from '../styles/Experience.module.css'

const experience = [
  {
    company: 'Webenetic',
    role: 'Lead Software Developer',
    startDate: new Date('2021-10-25'),
    endDate: new Date(),
    currentlyWorking: true,
    skills: [
      'AWS',
      'PugJS',
      'React.js',
      'Recoil.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequilize',
      'SendGrid',
      'AfterShip',
      'AWS Route 53',
      'AWS EC2',
      'AWS RDS',
      'AWS CodePipeline',
    ],
    tasks: [
      {
        title: 'eCommerce and CRM solutions',
        description: `Spearheaded the design and execution of eCommerce and CRM solutions for the pharmaceutical sector based on Node.Js and Express.JS, employing agile methodologies for project management. Leveraged data analytics to drive feature enhancements and introduce value-added services, resulting in 54% business growth.`,
      },
      {
        title: 'Analytical dashboards',
        description: `Managed the creation of analytical dashboards powered by MySQL queries, enabling real-time tracking of sales performance, productivity metrics, and incentive programs. Collaborated closely with directors and customer support to swiftly address user issues and implement permanent solutions.`,
      },
      {
        title: 'AWS infrastructure',
        description: `Oversaw the organization's AWS infrastructure, optimizing resource allocation and security protocols for seamless operations.`,
      },
      {
        title: 'Sales tracking tools',
        description: `Engineered sales tracking tools and middleware solutions to enhance data security and deliver actionable insights based on user roles and privileges. Introduced target management systems to foster accountability and drive sales growth across teams.`,
      },
      {
        title: 'Automated data scraping',
        description: `Provided mentorship and conducted code reviews to uphold coding standards and ensure the delivery of scalable, efficient software solutions.Implemented and managed cron jobs for automated data scraping, user session management, and report generation to enhance operational efficiency`,
      },
    ],
  },
  {
    company: 'Appvent',
    role: 'Full Stack Software Developer',
    startDate: new Date('2020-04-01'),
    endDate: new Date('2021-10-20'),
    currentlyWorking: false,
    skills: [
      'AWS',
      'PugJS',
      'React.js',
      'pSEO',
      'GraphQL',
      'MongoDB',
      'Socket.io',
      'Web Push',
      'Next.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequilize',
      'AWS SES',
      'AWS S3',
      'AWS Route 53',
      'AWS EC2',
      'AWS RDS',
      'AWS CodePipeline',
      'AWS API Gateway',
    ],
    tasks: [
      {
        title: 'Apollo Server and Client',
        description: `Developed an ERP system for seamless management from manufacturing to distribution and distribution to doctors, utilizing GraphQL, Next.js, Node.js, and MongoDB. Implemented backend functionality with Apollo Server and Client, integrating real-time notifications via Socket.io and email notifications using Postmark.`,
      },
      {
        title: 'API Integration',
        description: `Designed and deployed an e-commerce application for homemade candles, featuring custom integrations with Amazon and Flipkart for order processing and tracking. Implemented a personalized opt-in and opt-out notification system using Web Push and native browser APIs, alongside email functionality integrated through Mailjet.`,
      },
      {
        title: 'Programmatic SEO',
        description: `Created two SEO-focused tools to generate a predefined number of pages daily and automatically submit them to Google and Bing indexing APIs for enhanced search engine visibility.`,
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
