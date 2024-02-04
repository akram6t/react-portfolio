import React from 'react';
import { FcAndroidOs } from 'react-icons/fc';
import { SiTailwindcss, SiFlutter, SiNextdotjs, SiMui, SiHtml5, SiCss3, SiJavascript, SiFirebase } from 'react-icons/si';
import { DiReact, DiBootstrap } from 'react-icons/di';

const Projects = () => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
                    <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the my open-source web and Mobile Projects With Live Preview</p>
                </div>
                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                    
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <div className='sm:h-full sm:w-1/2'>
                            <img class="w-full sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://picsum.photos/420/300" alt="Jese Avatar" />
                        </div>
                        <div class="p-5 sm:w-1/2">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">CTO</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            html</div>
                                        <SiHtml5 color='#E96228' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            css</div>
                                        <SiCss3 color='#2953FC' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            javascript</div>
                                        <SiJavascript color='#FFE100' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            firebase</div>
                                        <SiFirebase color='#FFA600' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <div className='sm:h-full sm:w-1/2'>
                            <img class="w-full sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://picsum.photos/810/300" alt="Jese Avatar" />
                        </div>
                        <div class="p-5 sm:w-1/2">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">CTO</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            html</div>
                                        <SiHtml5 color='#E96228' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            css</div>
                                        <SiCss3 color='#2953FC' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            javascript</div>
                                        <SiJavascript color='#FFE100' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            firebase</div>
                                        <SiFirebase color='#FFA600' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <div className='sm:h-full sm:w-1/2'>
                            <img class="w-full sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://picsum.photos/850/300" alt="Jese Avatar" />
                        </div>
                        <div class="p-5 sm:w-1/2">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">CTO</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            html</div>
                                        <SiHtml5 color='#E96228' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            css</div>
                                        <SiCss3 color='#2953FC' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            javascript</div>
                                        <SiJavascript color='#FFE100' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            firebase</div>
                                        <SiFirebase color='#FFA600' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                        <div className='sm:h-full sm:w-1/2'>
                            <img class="w-full sm:h-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://picsum.photos/500/300" alt="Jese Avatar" />
                        </div>
                        <div class="p-5 sm:w-1/2">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Jese Leos</a>
                            </h3>
                            <span class="text-gray-500 dark:text-gray-400">CTO</span>
                            <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the flowbite platform and brand.</p>
                            <ul class="flex space-x-4 sm:mt-0">
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            html</div>
                                        <SiHtml5 color='#E96228' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            css</div>
                                        <SiCss3 color='#2953FC' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            javascript</div>
                                        <SiJavascript color='#FFE100' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                                <li className='cursor-pointer relative'>
                                    <div className="relative group w-11/20 h-11/20">
                                        <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">
                                            firebase</div>
                                        <SiFirebase color='#FFA600' size={25} opacity={0.7}/>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects