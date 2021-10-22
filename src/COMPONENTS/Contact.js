import React from 'react'

function Contact() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-5 text-lg text-indigo-300 p-20" >
            <h4 className="font-bold inline text-4xl text-indigo-100 mb-8 font-pop">
                Want to contact me?
            </h4>
            <div className="flex gap-6">
                <a
                    className="border-4 inline-flex w-44 p-2 items-center justify-center rounded-sm border-green-300  text-indigo-100 hover:bg-opacity-10 hover:bg-green-300 "
                    target="_blank"
                    href="mailto:thesohailjafri@gmail.com?subject=Contact from portfolio&body=I saw your portfolio..." >Mail me</a>
                <a
                    className="border-4 inline-flex w-44 p-2 items-center justify-center rounded-sm border-green-300  text-indigo-100 hover:bg-opacity-10 hover:bg-green-300 "
                    href="tel:+918356946202">Call me</a>
            </div>


        </div>

    )
}

export default Contact
