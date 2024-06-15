import Head from 'next/head'

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Step into Akib Jafri's digital realm and explore his wizardry with the MERN stack."
      />
      <meta
        name="keywords"
        content="akibjafri, Akib Jafri, akib jafri, web developer portfolio, akib web developer, akib developer, mern stack, akib Jafri portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Akib Jafri's Portfolio" />
      <meta
        property="og:description"
        content="From Code Chaos to Web Wonders: Full Stack Sorcerer!"
      />
      <meta property="og:image" content="https://i.imgur.com/2FJBIGD.png" />
      <meta property="og:url" content="https://akibjafri.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default CustomHead

CustomHead.defaultProps = {
  title: 'Akib Jafri',
}
