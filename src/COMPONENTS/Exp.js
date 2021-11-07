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
    'Xlsx'
]

const workTag3 = [
    'Node.js',
    'Express.js',
    'Mongoose',
    'MongoDB',
    'Bootstrap',
    'HTML'
]

function Exp() {
    return (
        <div className="flex gap-y-4 gap-x-8 bg-indigo-900 p-20 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto">
            <div className="flex flex-col gap-y-5 text-lg text-indigo-300">
                <h4 className="font-bold inline text-4xl text-indigo-100 mb-8 font-pop">
                    <span className="text-green-300">[ </span>
                    Experience
                    <span className="text-green-300"> ]</span>
                </h4>
                <div className="grid grid-cols-2 gap-4 ">

                    <div className=" bg-indigo-900 bg-opacity-70 p-6 rounded shadow-sm border-green-300 xl:border-l-4 pl-4 flex flex-col">
                        <h5 className="text-indigo-100 text-2xl">Web Developer At Webenetic - Marketing Agency</h5>
                        <span className="text-green-300 text-base " >Present - January 2022</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What I'm working on?</h6>
                        <p>At <strong>Webenetic</strong> I'm currently working as a full stack developer developing there <strong>backend server based on node.js</strong></p>
                        <p className="text-sm pt-6 flex gap-2 mt-auto">
                            {workTag3.map((val, i) => {
                                return (
                                    <span key={i} className="p-2 bg-indigo-300 bg-opacity-25 rounded hover:text-green-300 cursor-pointer">{val}</span>
                                )
                            })}
                        </p>
                    </div>

                    <div className="row-span-2 bg-indigo-900 bg-opacity-70 p-6 rounded shadow-sm border-green-300 xl:border-l-4 pl-4 flex flex-col">
                        <h5 className="text-indigo-100 text-2xl">React Developer At Getgo Logistic</h5>
                        <span className="text-green-300 text-base " >July 2021 - October 2021</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What I worked on?</h6>
                        <p>At <strong>Getgo Logistic</strong> I was working on creating <strong>React based website</strong> according to provided UI
                            and <strong>integrating backend APIs</strong> in frontend to make website dymanic and interactive</p>
                        <p className="text-sm pt-6 flex gap-2 mt-auto">
                            {workTag2.map((val, i) => {
                                return (
                                    <span key={i} className="p-2 bg-indigo-300 bg-opacity-25 rounded hover:text-green-300 cursor-pointer">{val}</span>
                                )
                            })}
                        </p>
                    </div>

                    <div className="bg-indigo-900 bg-opacity-70 p-6 rounded shadow-sm border-green-300 xl:border-l-4 pl-4 flex flex-col">
                        <h5 className="text-indigo-100 text-2xl">Storyline Developer At Basement Production</h5>
                        <span className="text-green-300 text-base " >May 2019 - July 2019</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What I worked on?</h6>
                        <p>At <strong>Basement Production</strong> I was assigned to develop Banking Application using vb.net and create
                            storyline on <strong><br />"How to build a Banking Application in vb.net"</strong></p>
                        <p className="text-sm pt-6 flex gap-2 mt-auto">
                            {workTag1.map((val, i) => {
                                return (
                                    <span key={i} className="p-2 bg-indigo-300 bg-opacity-25 rounded">{val}</span>
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
