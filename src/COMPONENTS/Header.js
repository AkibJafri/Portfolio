import React from 'react'
const data = [
    {
        n: 'I.',
        p: 'About',
    },
    {
        n: 'II. ',
        p: 'Experience'
    }, {
        n: 'III.',
        p: 'Projects'
    }, {
        n: 'IV. ',
        p: 'Contact'
    },

]

const scrollTo = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" })
}

function Header() {
    return (
        <header id="Header" className="hidden lg:flex justify-between items-end py-10">
            <h4 className="text-3xl tracking-wider font-pop font-bold text-green-300">TheSohailJafri</h4>
            <nav>
                <ul className="flex gap-x-5 font-tech text-xl ">
                    {
                        data.map((val, i) => {
                            return (
                                <li key={i} className="inline-flex gap-x-2 cursor-pointer font-pop"
                                    onClick={() => scrollTo(val.p)}
                                >
                                    <span className="text-green-300">[</span>
                                    <p className="text-indigo-50">{val.p}</p>
                                    <span className="text-green-300">]</span>

                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header
