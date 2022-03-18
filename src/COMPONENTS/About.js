import React from 'react'
import {
  SiTailwindcss,
  SiReact,
  SiExpress,
  SiMongodb,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFrontendmentor,
  SiLinkedin,
  SiGithub,
  SiInstagram,
  SiTwitter,
} from 'react-icons/si'
import {
  FaSass,
  FaHtml5,
  FaServer,
  FaNodeJs,
  FaFigma,
  FaLinkedin,
} from 'react-icons/fa'
import { FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'
import { MdOutlineWeb, MdSettings, MdDesignServices } from 'react-icons/md'
import { HiServer } from 'react-icons/hi'

function About() {
  return (
    <div
      id="About"
      className="flex flex-col gap-y-4 gap-x-8 bg-indigo-900 p-8 lg:p-12 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto"
    >
      <h4 className="font-bold inline text-2xl md:text-3xl xl:text-4xl text-indigo-100 mb-8 font-pop">
        <span className="text-green-300">[ </span>
        About
        <span className="text-green-300"> ]</span>
      </h4>
      <div className="flex flex-col xl:flex-row-reverse justify-center items-center">
        <div className="mx-auto my-auto xl:mr-0">
          <div className="relative mx-auto flex justify-center items-center transition-all ">
            <div
              id="ppBg"
              className="h-44 w-44 lg:h-56 lg:w-56
                        ml-8 mt-8 lg:ml-12 lg:mt-12 bg-indigo-300 z-10 rounded-md shadow-xl  bg-opacity-50"
            ></div>

            <div
              id="ppBg"
              className="absolute h-44 w-44 lg:h-56 lg:w-56
                        mr-8 mt-16 lg:mr-12 lg:mt-24 bg-green-300 z-0 rounded-md shadow-xl  bg-opacity-50"
            ></div>

            <img
              className="absolute h-44 w-44 lg:h-56 lg:w-56 object-cover rounded-md z-10 shadow-xl border-4 border-green-50"
              src="./assets/images/myself.jpg"
              alt="myprofile"
            />
          </div>
          <div className="flex justify-center gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 my-10 lg:my-12 text-green-300">
            <a
              href="https://www.frontendmentor.io/profile/thesohailjafri"
              target="_blank"
            >
              <SiFrontendmentor size={30} />
            </a>
            <a href="https://www.instagram.com/thesohailjafri" target="_blank">
              <SiInstagram size={30} />
            </a>
            <a href="https://github.com/thesohailjafri" target="_blank">
              <SiGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/thesohailjafri"
              target="_blank"
            >
              <SiLinkedin size={30} />
            </a>
            <a href="https://twitter.com/thesohailjafri" target="_blank">
              <SiTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 text-lg lg:text-xl text-indigo-300 max-w-3xl">
          <p>
            Hello! My name is <strong>Sohail</strong> and I enjoy creating
            everything web. I started my web developer journey back in 2020 when
            I was working for my junior college capstone project which was
            <br />
            <span className="text-green-300">
              {' '}
              Online Lawyer Appointment Portal
            </span>
            .
          </p>
          <p>
            Since then I have learned many things building and experimenting
            with websites and web apps via challenges from
            <a
              href="https://www.frontendmentor.io/profile/thesohailjafri"
              target="_blank"
              className="text-green-300"
            >
              {' '}
              frontendmentor.io
            </a>{' '}
            or via personal projects.
          </p>
          <p>
            Here's my <span className="text-green-300">stack</span> info if
            you're interested:
          </p>
          <div className="md:grid md:grid-cols-3">
            <div>
              <span className="hidden md:inline cursor-pointer text-lg text-green-300">
                <MdOutlineWeb
                  size={20}
                  className="text-indigo-300 inline mr-4 "
                />
                Front-end
              </span>
              <ul className="flex flex-col gap-y-1 mt-4">
                <li>
                  <FaHtml5 size={20} className="text-green-300 inline mr-4 " />
                  HTML5
                </li>
                <li>
                  <FaSass size={20} className="text-green-300 inline mr-4" />
                  SASS
                </li>
                <li>
                  <SiTailwindcss
                    size={20}
                    className="text-green-300 inline mr-4"
                  />
                  Tailwind
                </li>
                <li>
                  <SiReact size={20} className="text-green-300 inline mr-4" />
                  React.js
                </li>
              </ul>
            </div>
            <div>
              <span className="hidden md:inline text-lg cursor-pointer text-green-300">
                <HiServer size={20} className="text-indigo-300 inline mr-4 " />
                Back-end
              </span>
              <ul className="flex flex-col gap-y-1 mt-4">
                <li>
                  <MdSettings
                    size={20}
                    className="text-green-300 inline mr-4"
                  />
                  REST APIs
                </li>
                <li>
                  <FaNodeJs size={20} className="text-green-300 inline mr-4" />
                  Node.js
                </li>
                <li>
                  <SiExpress size={20} className="text-green-300 inline mr-4" />
                  Expree.js
                </li>
                <li>
                  <SiMongodb size={20} className="text-green-300 inline mr-4" />
                  MongoDB
                </li>
              </ul>
            </div>
            <div>
              <span className="hidden md:inline cursor-pointer text-lg text-green-300">
                <MdDesignServices
                  size={20}
                  className="text-indigo-300 inline mr-4 "
                />
                Design
              </span>
              <ul className="flex flex-col gap-y-1 mt-4">
                <li>
                  <FaFigma size={20} className="text-green-300 inline mr-4" />
                  Figma
                </li>
                <li>
                  <SiAdobexd size={20} className="text-green-300 inline mr-4" />
                  Adobe XD
                </li>
                <li>
                  <SiAdobeillustrator
                    size={20}
                    className="text-green-300 inline mr-4"
                  />
                  Adobe Illustrator
                </li>
                <li>
                  <SiAdobephotoshop
                    size={20}
                    className="text-green-300 inline mr-4"
                  />
                  Adobe Photoshop
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
