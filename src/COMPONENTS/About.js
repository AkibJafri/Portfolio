import React from 'react'
import {
    SiTailwindcss, SiReact, SiExpress, SiMongodb, SiAdobexd, SiAdobeillustrator, SiAdobephotoshop,
    SiFrontendmentor
} from 'react-icons/si'
import { FaSass, FaHtml5, FaServer, FaNodeJs, FaFigma, } from 'react-icons/fa'
import { FiInstagram, FiGithub } from 'react-icons/fi'
import { MdOutlineWeb, MdSettings, MdDesignServices } from 'react-icons/md'
import { HiServer } from 'react-icons/hi'


function About() {
    return (
        <div className="flex gap-y-4 gap-x-8 bg-indigo-900 p-20 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto">
            <div className="flex flex-col gap-y-5 text-lg text-indigo-300 max-w-3xl">
                <h4 className="font-bold inline text-4xl text-indigo-100 mb-8 font-pop">
                    <span className="text-green-300">[ </span>
                    About
                    <span className="text-green-300"> ]</span>
                </h4>
                <p>
                    Hello! My name is Sohail and I enjoy creating everything web.
                    I started my web developer journey back in 2020 when I was working for my junior college capstone project which was
                    <span className="text-green-300"><br /> "Online Lawyer Appointment Portal"</span>.
                </p>
                <p>
                    Since then I have learned many things building and experimenting with websites and web apps via challenges from
                    <a href="https://www.frontendmentor.io/profile/thesohailjafri" target="_blank" className="text-green-300"> frontendmentor.io</a> and web-development tutorials.
                </p>
                <p className="">
                    Here's my <span className="text-green-300">stack</span> info if you're interested:
                </p>
                <div className="grid grid-cols-3">
                    <div>
                        <h5 className="cursor-pointer"><span className="text-lg text-green-300"><MdOutlineWeb size={20} className="text-indigo-300 inline mr-4 " />Front-end</span></h5>
                        <ul className="flex flex-col gap-y-1 mt-4">
                            <li><FaHtml5 size={20} className="text-green-300 inline mr-4 " />HTML5</li>
                            <li><FaSass size={20} className="text-green-300 inline mr-4" />SASS</li>
                            <li><SiTailwindcss size={20} className="text-green-300 inline mr-4" />Tailwind</li>
                            <li><SiReact size={20} className="text-green-300 inline mr-4" />React.js</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="cursor-pointer">
                            <span className="text-lg text-green-300"><HiServer size={20} className="text-indigo-300 inline mr-4 " />Back-end</span></h5>
                        <ul className="flex flex-col gap-y-1 mt-4">
                            <li><MdSettings size={20} className="text-green-300 inline mr-4" />REST APIs</li>
                            <li><FaNodeJs size={20} className="text-green-300 inline mr-4" />Node.js</li>
                            <li><SiExpress size={20} className="text-green-300 inline mr-4" />Expree.js</li>
                            <li><SiMongodb size={20} className="text-green-300 inline mr-4" />MongoDB</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="cursor-pointer">
                            <span className="text-lg text-green-300"><MdDesignServices size={20} className="text-indigo-300 inline mr-4 " />Design</span></h5>
                        <ul className="flex flex-col gap-y-1 mt-4">
                            <li><FaFigma size={20} className="text-green-300 inline mr-4" />Figma</li>
                            <li><SiAdobexd size={20} className="text-green-300 inline mr-4" />Adobe XD</li>
                            <li><SiAdobeillustrator size={20} className="text-green-300 inline mr-4" />Adobe Illustrator</li>
                            <li><SiAdobephotoshop size={20} className="text-green-300 inline mr-4" />Adobe Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ml-auto my-auto">
                <div className="relative inline-flex justify-center items-center ">

                    <div id="ppBg" className="h-64 w-64 bg-indigo-300 z-10 rounded-md shadow-xl ml-10 mt-10 bg-opacity-50">
                    </div>

                    <div id="ppBg" className="absolute h-64 w-64 bg-green-300 z-0 rounded-md shadow-xl mr-10 mt-20 bg-opacity-50">
                    </div>

                    <img
                        className="absolute h-64 w-64 object-cover rounded-md z-10 shadow-xl border-4 border-green-50"
                        src="https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="myprofile" />

                </div>
                <div className="flex justify-center gap-x-6 mt-10 text-green-300">
                    <a href="https://www.frontendmentor.io/profile/thesohailjafri" target="_blank"><SiFrontendmentor size={30} className="cursor-pointer hover:text-indigo-100" /></a>
                    <a href="https://www.instagram.com/thesohailjafri/" target="_blank"><FiInstagram size={30} className="cursor-pointer hover:text-indigo-100" /></a>
                    <a href="https://github.com/thesohailjafri" target="_blank"><FiGithub size={30} className="cursor-pointer hover:text-indigo-100" /></a>
                </div>

            </div>

        </div >
    )
}

export default About
