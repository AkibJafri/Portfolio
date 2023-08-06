import Head from 'next/head'

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Sohail Jafri is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="thesohailjafri, Sohail Jafri, sohail, jafri, web developer portfolio, sohail web developer, sohail developer, mern stack, Sohail Jafri portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Sohail Jafri's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
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
