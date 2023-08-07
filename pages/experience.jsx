import React from 'react'
import { differenceInMonths, format } from 'date-fns'
import styles from '../styles/Experience.module.css'

const experience = [
  {
    company: 'Appvent',
    role: 'Software Consultant',
    startDate: new Date('2023-01-01'),
    endDate: new Date(),
    currentlyWorking: true,
    skills: [
      'AWS',
      'PugJS',
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
      'AWS DynamoDB',
      'AWS SNS',
      'AWS SQS',
      'AWS CloudTrail',
      'AWS Cloud9',
    ],
    tasks: [
      {
        title: 'Managed AWS infrastructure',
        description:
          'Created and managed AWS infrastructure for the company. This included setting up AWS EC2, RDS, S3, Route 53, CodePipeline, IAM and User groups for developers, accountants, managers and client.',
      },
      {
        title: 'Team management',
        description:
          'Leading a team of 5 developers and 2 designers. This included managing their tasks, code reviews, and ensuring code quality.',
      },
      {
        title: 'Implemented CI/CD',
        description:
          'Implemented CI/CD using AWS CodePipeline and Github Actions. This helped in automating the deployment process and reducing the time taken to deploy the code.',
      },
      {
        title: 'Managed testing suite',
        description:
          'Managed testing suite for the company using Jest and Jira. This included writing unit tests, integration tests, and end-to-end tests.',
      },
    ],
  },
  {
    company: 'Webenetic',
    role: 'Senior MERN Stack Developer',
    startDate: new Date('2022-12-26'),
    endDate: new Date(),
    currentlyWorking: true,
    // Amazon Web Services (AWS) · PugJS · React.js · Node.js · Express.js · MySQL
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
        title: 'Added data-driven insights',
        description:
          'Developed and implemented sales tracking graphs for analyzing agents, months, and sources sales. These insights guided strategic decisions, improving sales performance and driving company growth by 15% in 3 months.',
      },
      {
        title: 'Implemented robust middleware',
        description:
          'Implemented middleware for authentication, IP, role, privilege, and domain checks to ensure data encapsulation and deliver insights based on mentioned parameters.',
      },
      {
        title: 'Target management',
        description:
          'Implemented target management between admin, managers, agents, and teams. Driving motivation and accountability of order sales increasing sales by 20%.',
      },
      {
        title: 'Mentorship and code quality',
        description:
          'Conducted code reviews, providing guidance and mentorship to junior developers. Ensured high-quality, scalable, bug-free, and efficient code.',
      },
    ],
  },
  {
    company: 'Webenetic',
    role: 'MERN Stack Developer',
    startDate: new Date('2022-1-25'),
    endDate: new Date('2022-12-26'),

    currentlyWorking: false,
    skills: [
      'AWS',
      'React.js',
      'Recoil.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Sequilize',
      'SendGrid',
      'AfterShip',
      'AWS S3',
      'AWS Elastic Beanstalk',
    ],
    tasks: [
      {
        title: 'Multi-user application',
        description:
          'Created a multi-panel application with 6 roles (super-admin, admin, manager, agent, editor, viewer) optimizing collaboration and communication between them. This privileged access system based on user roles improved workflow efficiency and facilitated seamless team coordination.',
      },
      {
        title: 'Operation management panels',
        description:
          'Implemented various panels for managing products, categories, coupons, discounts, users, etc. This helped the company in managing products, categories, and discounts applied on their website with a record of changes made.',
      },
      {
        title: 'Added cron jobs',
        description:
          'Implemented cron jobs for scraping leads data from IndiaMart, logging out the users after a certain duration, and generating daily reports.',
      },
    ],
  },
  {
    company: 'Webenetic',
    role: 'Web Developer Intern',
    startDate: new Date('2021-10-23'),
    endDate: new Date('2022-1-25'),
    currentlyWorking: false,
    skills: ['React.js', 'MongoDb', 'SCSS', 'HTML'],
    tasks: [
      {
        title: 'Boosted system',
        description:
          'Boosted speed of fetching orders records by 80% by optimizing SQL queries and indexing i.e. from avg 10min to 2min for 12K records. This involved removing columns that are not used in the front end and generating all the required data using SQL queries rather than generating them using the node.js runtime server.',
      },
      {
        title: 'Database migration',
        description:
          'Utilized Node.js and SQL to migrate orders, order products, customers, and order addresses from 10 different databases to a single database in a normalized manner for better availability and better response by 50% from avg 10sec to 5sec.',
      },
    ],
  },
  {
    company: 'GetGo Logistics',
    role: 'React Developer Intern',
    startDate: new Date('2021-08-01'),
    endDate: new Date('2021-10-31'),
    currentlyWorking: false,
    skills: ['SASS', 'React.js', 'Restful APIs'],
    tasks: [
      {
        title: 'Implemented multi-user panel',
        description:
          'Developed React-based frontend for multi-user panel (admin, user, lawyer).',
      },
      {
        title: 'Improved performance',
        description:
          'Streamlined user interface performance by implementing efficient REST calls in React and Redux, optimizing the speed and responsiveness of web applications.',
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
