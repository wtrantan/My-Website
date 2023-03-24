import Head from 'next/head'
import {BsFillMoonStarsFill, BsTextCenter} from 'react-icons/bs';
import {AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useState } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { RSC_MODULE_TYPES } from 'next/dist/shared/lib/constants';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  //background

   /*
    let stars = document.getElementById('stars');
    let mountains_front = document.getElementById('mountains_front')
 
    window.addEventListener('scroll', function()){
    
    }
*/
  return (
    <div className="" id="about">
      <Head>
        <title>William Trantan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className=" bg-gradient-to-r from-indigo-900 to-gray-900 " >
           
        <section className="scroll-smooth min-h-screen bg-stars1 bg-fixed items-center bg-no-repeat bg-cover bg-size ">
       
        
          <div className=" min-h-screen bg-mount1 items-center bg-no-repeat bg-cover bg-size">
          <nav className="  py-10 p-10 pl-10 mb-12 flex justify-between text-white">
            <h1 className="font-burtons text-xl">My Portfolio Website</h1>
            <ul className=" px-10 flex items-center ml-50">

                <li className="group "><Link to="about" spy={true} smooth={true} offset={50} duration={500} className="transition ease-in-out
               group-hover:scale-110 delay-75 bg-gradient-to-r from-purple-400 text- to-blue-300 
               text-white px-6 py-2 border-none rounded-md ml-8">About</Link></li>
              <li><a className="transition ease-in-out 
              group-hover:scale-110 delay-75 bg-gradient-to-r from-blue-300 text- to-purple-400 text-white px-4 py-2 border-none rounded-md ml-8" href="about">Projects</a></li>
              <li>
                <a className=" transition ease-in-out group-hover:scale-110 delay-75 bg-gradient-to-r from-purple-400 text- to-blue-300 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="resume.pdf" target="_blank">Resume</a>
              </li>
             
            </ul>
          </nav>

          <div className="min-h-screen bg-gradient-to-t from-[#1e1431] to-black bg-blend-lighten bg-fixed items-center bg-no-repeat bg-cover bg-size">
        
          <div className="mx-10 lg:flex gap-10 group">
            <div className=" mx-20 text-center shadow-2xl p-10 rounded-xl my-10 bg-gradient-to-r  from-pink-500 to-gray-800 delay-75  flex-1">
            
              <h3 className=" text-purple-300 md:text-4xl text-3xl font-medium pt-8 pb-2  ">
              About Me
              </h3>
              <p className="py-2 md:text-lg text-xl text-gray-200">
              I was born in Minnesota, and I moved to San Jose! I am a sophomore pursuing a Bachelor’s in Computer Science & Engineering at the University of California, Merced. I was always interested in learning to code and make fun projects ever since I was young. I have learned C++, C, SQL, Java, Python, HTML/CSS, JavaScript, Tailwind, and React. apart from Computer Science I'm interested in Hockey, Water polo, Swimming, and Video Games.
              </p>
              <div className="mx-auto  w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 rounded-3xl ">
              <img src="santacruz.jpg" layout="fill" objectFit="cover" className="relative "/>
              </div>
            </div>
            </div>
          </div>
          </div>

          </section>
          <section>
          
          </section>
        
             
      </main>
    </div>
  );
}
