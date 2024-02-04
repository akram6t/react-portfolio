import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-8 lg:mt-0'>

            <div className="pb-6 sm:pb-8 lg:pb-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <section className="flex flex-col-reverse justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                        {/* <!-- content - start --> */}
                        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

                            <h1 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">Hi I am <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 lg:text-6xl font-semibold"> Akram Khan</span></h1>

                            <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-xl dark:text-slate-300 font-thin">A passionate Full Stack Software Developer 🚀 having a special interest in Frontend and backend technologies and experience of building Web and mobile applications with JavaScript / Reactjs / Nodejs / Flutter / Android  and some other cool libraries and frameworks.</p>

                            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                <a href="#" className="flex rounded-lg bg-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base items-center gap-2"> <AiFillGithub/> View On Github</a>
                                <a href="#" className="flex rounded-lg bg-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base items-center gap-2"><AiFillLinkedin/> View On LinkedIn</a>

                            </div>
                        </div>
                        {/* <!-- content - end --> */}

                        {/* <!-- image - start --> */}
                        <div className="w-48 mx-auto h-48 overflow-hidden rounded-full bg-gray-100 shadow-lg lg:h-auto sm:w-1/4 my-auto">
                            <img src={require('./../images/portfile.jpg')} loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
                        </div>
                        {/* <!-- image - end --> */}
                    </section>
                </div>
            </div>

        </div>
    )
}

export default Header