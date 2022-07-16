import React from 'react'

function Contact() {
  return (
    <div
      id="Contact"
      className="flex flex-col justify-center items-center gap-y-5 text-lg text-indigo-300 p-8"
    >
      <h4 className="font-bold inline text-2xl md:text-3xl xl:text-4xl text-indigo-100 mb-8 font-pop">
        Want to contact me?
      </h4>
      <div className="flex flex-col md:flex-row gap-6">
        <a
          className="border-4 inline-flex w-44 p-2 items-center justify-center rounded-sm border-green-300  text-indigo-100 hover:bg-opacity-10 hover:bg-green-300 "
          href="mailto:thesohailjafri@gmail.com?subject=Contact from portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Mail me
        </a>
      </div>
    </div>
  )
}

export default Contact
