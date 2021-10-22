import React from 'react'

function Contact() {
    return (
        <div className="flex gap-y-4 gap-x-8 bg-indigo-900 p-20 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto">
            <div className="flex flex-col gap-y-5 text-lg text-indigo-300">
                <h4 className="font-bold inline text-4xl text-indigo-100 mb-8 font-pop">
                    <span className="text-green-300">[ </span>
                    Contact
                    <span className="text-green-300"> ]</span>
                </h4>

                <form className="grid text-green-300">
                    <label htmlFor="email">Email</label>
                    <input className="rounded p-2 text-indigo-900 my-1" id="email" type="text" />
                    <label className="mt-2" htmlFor="message">Message</label>
                    <textarea className="rounded p-2 text-indigo-900 my-1" id="message" type="text" />
                    <button className="p-2 bg-green-300 text-indigo-900 rounded mt-2">Send</button>
                </form>

            </div>

        </div >
    )
}

export default Contact
