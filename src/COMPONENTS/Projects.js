import React from 'react'
import { SiNetlify, SiGithub } from 'react-icons/si'

const proAry = [
    {
        name: 'Spotify Clone',
        git: 'https://github.com/thesohailjafri/spotifyclone',
        live: null,
        meta: 'A Spotify Clone build with spotify developers APIs and custom Css which display users data like users liked songs, followed playlists, artist and album.',
        tech: ['React.js', 'SCSS', 'Spotify Developers APIs'],
    },
    {
        name: 'Where in the world?',
        git: 'https://github.com/thesohailjafri/Where-in-the-world',
        live: 'https://fm-where-in-the-world.netlify.app/',
        meta: 'A Web-app which fetches data from restcountries.eu and displays country data on site with a dark theme',
        tech: ['React.js', 'Styled Components', 'Rest Countries APIs'],
    },
    {
        name: 'TheCocktailDb',
        git: 'https://github.com/thesohailjafri/react-cocktail',
        live: 'https://react-cocktail-f1ex.netlify.app/',
        meta: 'A Web-app which fetches data from thecocktaildb.com and displays drinks, cocktail and juice data on site like name of drink, recipe, ingredients.',
        tech: ['React.js', 'Styled Components', 'CocktailDb APIs'],
    },
    {
        name: 'Rock Paper Scissors',
        git: 'https://github.com/thesohailjafri/react-cocktail',
        live: 'https://react-cocktail-f1ex.netlify.app/',
        meta: 'Game of Rock Paper Scissors build with help of modern javascript and SCSS.',
        tech: ['HTML', 'SCSS', 'Javascript'],
    },
    {
        name: 'Weather App',
        git: 'https://github.com/thesohailjafri/Weather-App',
        live: 'https://sohail-weather-app.netlify.app/',
        meta: 'A Weather App build with openweathermap.org APIs and Semantic Ui React which display current, hourly, weekly weather information.',
        tech: ['React.js', 'SCSS', 'Open Weather APIs', 'Semantic Ui React'],
    },

    {
        name: 'News Site',
        git: 'https://github.com/thesohailjafri/NewsSite',
        live: 'https://project-newsday.netlify.app/#/',
        meta: 'News Site which fetches data from free-news and covid-193 APIs to display news article and covid updates with a option dark mode',
        tech: ['React.js', 'Tailwind', 'Rapid APIs', 'Axios'],
    },

]

function Projects() {
    return (
        <div className="flex gap-y-4 gap-x-8 bg-indigo-900 p-20 mt-20 bg-opacity-30 rounded-md shadow-sm mx-auto">
            <div className="flex flex-col gap-y-5 text-lg text-indigo-300">
                <h4 className="font-bold inline text-4xl text-indigo-100 mb-8 font-pop">
                    <span className="text-green-300">[ </span>
                    Projects
                    <span className="text-green-300"> ]</span>
                </h4>
                <div className="grid grid-cols-3 gap-6">
                    {proAry.map((val, i) => {
                        return (
                            <div className="bg-indigo-900 p-6 rounded shadow-sm flex flex-col">
                                <h5 className="text-indigo-100 text-2xl">{val.name}</h5>
                                <div className="inline-flex gap-x-4 text-sm text-indigo-100 mb-4 mt-2">
                                    {val.git && <a
                                        className="inline-flex items-center justify-center gap-x-2"
                                        href={val.git} target="_blank"><SiGithub size={20} className="text-green-300" />Git</a>}
                                    {val.live && <a
                                        className="inline-flex items-center justify-center gap-x-2"
                                        href={val.live} target="_blank"><SiNetlify size={20} className="text-green-300" />Live</a>}
                                </div>
                                <p className="text-sm">{val.meta}</p>
                                <div className="text-sm flex gap-2 flex-wrap mt-auto pt-4 mb-0">
                                    {val?.tech?.map((val, i) => {
                                        return (
                                            <span key={i} className="p-2 text-indigo-300 bg-indigo-300 bg-opacity-25 rounded">{val}</span>
                                        )
                                    })}
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>

        </div >
    )
}

export default Projects
