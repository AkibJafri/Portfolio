import React from 'react'

function About() {
    return (
        <div className="flex gap-y-4 bg-indigo-900 p-20 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto">
            <div className="flex flex-col gap-y-4">
                <h1 className="font-bold inline text-4xl text-indigo-100 ">
                    <span className="text-green-300">I. </span>
                    About.
                    {/* <hr className=" border-green-300 border-2" /> */}
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, id ratione? Dolor quae reprehenderit repellendus, doloremque quo earum, nemo veritatis molestiae nam molestias voluptatum est culpa vero officiis asperiores ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, id ratione? Dolor quae reprehenderit repellendus, doloremque quo earum, nemo veritatis molestiae nam molestias voluptatum est culpa vero officiis asperiores ipsum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, id ratione? Dolor quae reprehenderit repellendus, doloremque quo earum, nemo veritatis molestiae nam molestias voluptatum est culpa vero officiis asperiores ipsum.
                </p>
            </div>
            <div className="relative m-24">
                <div className="  h-64 w-64 bg-green-300 z-0 rounded-md transform rotate-45 shadow-xl ">
                </div>
                <img
                    className="absolute top-0 left-0 h-64 w-64 object-cover rounded-md z-10 shadow-xl"
                    src="https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />


            </div>


        </div>
    )
}

export default About
