import Head from 'next/head'

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Step into Sohail Jafri's digital realm and explore his wizardry with the MERN stack."
      />
      <meta
        name="keywords"
        content="thesohailjafri, Sohail Jafri, sohail, jafri, web developer portfolio, sohail web developer, sohail developer, mern stack, Sohail Jafri portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Sohail Jafri's Portfolio" />
      <meta
        property="og:description"
        content="From Code Chaos to Web Wonders: Full Stack Sorcerer!"
      />
      <meta property="og:image" content="https://imgur.com/2FJBIGD.png" />
      <meta property="og:url" content="https://thesohailjafri.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default CustomHead

CustomHead.defaultProps = {
  title: 'Sohail Jafri',
}
