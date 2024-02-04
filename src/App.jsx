import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return(
    <div className='min-h-screen bg-slate-50 dark:bg-gray-900'>
      <Navbar/>
      <hr />
      <div className='h-20'/>
      <Header/>
      {/* <hr className="dark:border-slate-600" /> */}
      {/* <div className='h-24'/> */}
      {/* <About/> */}
      {/* <hr className='dark:border-slate-600' /> */}
      {/* <div className='mt-10 lg:mt-20'/> */}
      <WhatIDo/>

      <div className='mt-10 lg:mt-20'/>
      <Skills/>

      <div className='mt-10 lg:mt-20'/>
      <Projects/>
      {/* <hr className='dark:border-slate-600' /> */}

      <div className='h-16'/>
      <Contact/>

      <div className='h-16'/>
      <Footer/>
    </div>
  )
}

export default App;