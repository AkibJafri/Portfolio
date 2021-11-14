import React from 'react'

const workTag1 = [
    'Articulate Storyline',
    'Visual Studio Basic',
    'Vb.net'
]

const workTag2 = [
    'React.js',
    'Axios',
    'Bootstrap',
    'Material Ui',
    'D3',
    'Xlsx',
    'React Router Dom'
]

const workTag3 = [
    'Node.js',
    'Express.js',
    'Mongoose',
    'MongoDB',
    'Bootstrap',
    'HTML'
]

function Tags({ i, val }) {
    return (
        <span key={i} className=" p-2 text-indigo-300 bg-indigo-300 bg-opacity-25 rounded hover:text-green-300 cursor-pointer">{val}</span>
    )
}

function Exp() {
    return (
        <div id="Experience" className="flex gap-y-4 gap-x-8 bg-indigo-900 p-8 lg:p-12 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto">
            <div className="flex flex-col gap-y-5 text-lg lg:text-xl text-indigo-300">
                <h4 className="font-bold block text-2xl md:text-3xl xl:text-4xl text-indigo-100 mb-8 font-pop">
                    <span className="text-green-300">[ </span>
                    Experience
                    <span className="text-green-300"> ]</span>
                </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 row-start-1">

                    <div className=" bg-indigo-900 bg-opacity-70 p-6 rounded shadow-sm border-green-300 xl:border-l-4 pl-4 flex flex-col xl:row-start-1 xl:col-span-2">
                        <h5 className="text-indigo-100 text-xl">Web Developer At Webenetic - Marketing Agency</h5>
                        <span className="text-green-300 text-base " >Present - January 2022</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What I'm working on?</h6>
                        <p>At <a href="https://webenetic.com/" target="_blank">Webenetic</a> I'm currently working as a full stack developer developing there <strong>backend server based on Node.js</strong> and there <strong>admin panel on React.js</strong></p>
                        <p className="text-sm pt-6 flex flex-wrap gap-2 mt-auto">
                            {workTag3.map((val, i) => {
                                return (
                                    <Tags key={i} i={i} val={val} />
                                )
                            })}
                        </p>
                    </div>

                    <div className="lg:row-span-2 bg-indigo-900 bg-opacity-70 p-6 rounded shadow-sm border-green-300 xl:border-l-4 pl-4 flex flex-col ">
                        <h5 className="text-indigo-100 text-xl">React Developer At Getgo Logistic</h5>
                        <span className="text-green-300 text-base " >July 2021 - October 2021</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What I worked on?</h6>
                        <p>At <a herf="https://www.getgologistics.com/" target="_blank">Getgo Logistic</a> I was working on creating there new product called <a href="https://themedius.ai/" target="_blank">medius.ai</a> which was a Dept Collection system.
                            I worked on creating there <strong>frontend on React.js</strong>.
                            My job includes <strong>intergrating pre-provided UI with there REST API</strong> sometimes creating custom UI based on their requirements and creating app routing using <strong>
                                react-router-dom</strong> and redirecting user to different pages on certain conditions and values.
                        </p>
                        <p className="text-sm flex gap-2 flex-wrap mt-auto pt-4 mb-0">
                            {workTag2.map((val, i) => {
                                return (
                                    <Tags key={i} i={i} val={val} />
                                )
                            })}
                        </p>
                    </div>

                    <div className="bg-indigo-900 bg-opacity-70 p-6 rounded shadow-sm border-green-300 xl:border-l-4 pl-4 flex flex-col xl:row-start-2 xl:col-span-2">
                        <h5 className="text-indigo-100 text-xl">Storyline Developer At Basement Production</h5>
                        <span className="text-green-300 text-base " >May 2019 - July 2019</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What I worked on?</h6>
                        <p>At <a href="https://basementps.com/">Basement Production</a> I was assigned to develop Banking Application using
                            <strong>vb.net</strong> and create a storyline e-learning module based it called <strong className="">"How to build a Banking Application in vb.net"</strong></p>
                        <p className="text-sm pt-6 flex flex-wrap gap-2 mt-auto">
                            {workTag1.map((val, i) => {
                                return (
                                    <Tags key={i} i={i} val={val} />
                                )
                            })}
                        </p>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Exp
