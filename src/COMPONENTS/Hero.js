import React, { useState, useEffect } from 'react'
import { MdOutlineFileDownload } from 'react-icons/md'
import heroGif from '../STATIC/gifs/heroGif.gif'
import heroSvg from '../STATIC/svgs/tsj_css.svg'
const whoArray = [
    'A Web Developer and Graphic Designer.',
    'A React.js Front-end Developer.',
    'A Express.js Back-end Developer.',
]
function Hero() {
    const [index, setIndex] = useState(0)
    const [who, setWho] = useState(whoArray[index])
    useEffect(() => {
        let timer = setTimeout(() => {
            const eleWho = document.getElementById('whoim')
            eleWho.style.opacity = 0
            let i = index
            console.log(index)
            if (i + 1 === whoArray.length) {
                i = 0
            } else {
                i = i + 1
            }
            setTimeout(() => {
                eleWho.style.opacity = 1
                setIndex(i)
                setWho(whoArray[i])
            }, 800)

        }, 7500)
        return () => {
            clearTimeout(timer)
        }
    }, [index, who])
    return (
        <div className="flex flex-col xl:flex-row 2xl:flex-row gap-y-8 bg-indigo-900 p-20 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto transition-all
        ">

            <div id='hero' className="flex flex-col gap-y-4 max-w-3xl">
                <p className="font-pop text-green-300 text-lg"
                >Namaste 🙏  <span className="text-indigo-50"> Myself </span> </p>
                <h1 className="font-bold text-6xl text-indigo-100 font-pop">
                    Sohail Jafri.</h1>
                <h2 id='whoim' className=" h-28 font-bold text-5xl text-green-300 transition-all ease duration-500 font-pop">
                    {who}
                </h2>

                <p className="max-w-2xl text-lg text-indigo-300 my-4">
                    Currently I'm a Third Year IT Engineering Student at Datta Meghe College of Engineering. I love building fun and dynamic websites using
                    <span className="text-green-300"> React.js </span>
                    and other open source libraries.</p>
                <button className="border-4 inline-flex w-44 p-2 items-center justify-center rounded-sm border-green-300  text-indigo-100 hover:bg-opacity-10 hover:bg-green-300 ">
                    <MdOutlineFileDownload size={25} className="mr-3 text-indigo-100 " />
                    Download CV
                </button>
            </div>
            <img id="heroSvg"
                className="mx-auto xl:mr-0 2xl:mr-0 object-contain h-64 w-auto"
                src={heroSvg} alt="hero gif" />


        </div>
    )
}

export default Hero
