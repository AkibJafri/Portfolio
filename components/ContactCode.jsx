import styles from '../styles/ContactCode.module.css'

const contactItems = [
  {
    social: 'website',
    link: 'akibjafri.com',
    // href: 'https://thesohailjafri.com',
  },
  {
    social: 'email',
    link: 'akibjafri12@gmail.com',
    href: 'mailto:akibjafri12@gmail.com',
  },
  {
    social: 'github',
    link: '@akibjafri',
    href: 'https://github.com/AkibJafri',
  },
  {
    social: 'linkedin',
    link: '@thesohailjafri',
    href: 'https://www.linkedin.com/in/Akibjafri/',
  },
  {
    social: 'instagram',
    link: '@akibjafri',
    href: 'https://www.instagram.com/its_akib_jafri',
  },
  {
    social: 'twitter',
    link: '@akibjafri',
    href: 'https://www.twitter.com/akibjafri',
  },
  {
    social: 'hacker-rank',
    link: '@akibjafri',
    href: 'https://www.hackerrank.com/profile/jafriakib12',
  },
  {
    social: 'frontend-mentor',
    link: '@akibjafri',
    href: 'https://www.frontendmentor.io/profile/akibjafri/solutions/',
  },
]

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  )
}

export default ContactCode
