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

function Exp() {
    return (
        <div className="flex gap-y-4 gap-x-8 bg-indigo-900 p-20 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto">
            <div className="flex flex-col gap-y-5 text-lg text-indigo-300">
                <h4 className="font-bold inline text-4xl text-indigo-100 mb-8 font-pop">
                    <span className="text-green-300">[ </span>
                    Experience
                    <span className="text-green-300"> ]</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                    <p className="border-green-300 xl:border-l-4 pl-4">
                        <h5 className="text-indigo-100 text-2xl">Storyline Developer At Basement Production</h5>
                        <span className="text-green-300 text-base " >May 2019 - July 2019</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What i worked on?</h6>
                        <p>At <strong>Basement Production</strong> i was assigned to develop Banking Application using vb.net and create
                            storyline on <strong><br />"How to build a Banking Application in vb.net"</strong></p>
                        <p className="text-sm mt-6 flex gap-2">
                            {workTag1.map((val, i) => {
                                return (
                                    <span key={i} className="p-2 bg-indigo-300 bg-opacity-25 rounded">{val}</span>
                                )
                            })}
                        </p>
                    </p>
                    <p className="border-green-300 xl:border-l-4 pl-4">
                        <h5 className="text-indigo-100 text-2xl">React Developer At Getgo Logistic</h5>
                        <span className="text-green-300 text-base " >August 2021 - October 2021</span>
                        <h6 className="text-indigo-100 text-xl mt-6 mb-2">What i worked on?</h6>
                        <p>At <strong>Getgo Logistic</strong> i was working on creating <strong>React based website</strong> according to provided UI
                            and <strong>integrating backend APIs</strong> in frontend to make website dymanic and interactive</p>
                        <p className="text-sm mt-6 flex gap-2">
                            {workTag2.map((val, i) => {
                                return (
                                    <span key={i} className="p-2 bg-indigo-300 bg-opacity-25 rounded">{val}</span>
                                )
                            })}
                        </p>
                    </p>
                </div>
            </div>

        </div >
    )
}

export default Exp
