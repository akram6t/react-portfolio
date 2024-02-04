import React, { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import './Components.css';
import useDarkSide from './../SwitchTheme';
import SkillsData from '../datas/Data_Skills';

const Skills = () => {
    const progressBarStyles = (colorTheme, percentage) => {
        return { backgroundImage: `radial-gradient(closest-side, ${colorTheme == 'dark' ? '#F8FAFC' : '#111827'} 87%, transparent 80% 100%), conic-gradient(from 0deg, ${colorTheme == "light" ? '#00B3EA' : '#0D00FF'} ${percentage}%, #B5B5B5 0)` }
    };
    const [colorTheme, setTheme] = useDarkSide();
    const [skillsData, setSkillsData] = useState(SkillsData);

    return (
        <div className='max-w-screen-xl mx-auto p-3'>

            {/* <h1 className='text-3xl mt-10 lg:mt-0 lg:text-5xl text-center underline dark:text-slate-50'>Skills</h1> */}
            <h2 class="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Skills</h2>
            <div className="grid_skills mt-14 text-gray-900 bg:text-slate-50 text-xl">

                {
                    skillsData.map((value, index) => {


                        return <div key={index} className={`cursor-pointer progress-bar p-7 relative w-full h-full rounded-full bg-gradient-to-b from-white via-transparent to-transparent flex items-center justify-center`}
                            style={progressBarStyles(colorTheme, value.percentage)}>

                            <div className="relative group w-11/20 h-11/20">
                                <div className="group-hover:visible group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-700 text-white py-2 px-4 rounded text-xs transition-opacity duration-300 invisible opacity-0">{value.name}</div>
                                <img className="w-full h-full" src={value.icon} alt={value.name.toLowerCase()} />
                            </div>
                        </div>

                    })

                }

            </div>

        </div>
    )
}

export default Skills