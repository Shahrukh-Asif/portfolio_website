import './index.scss'
import AnimatedLetters from '../AnimatedLetter';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDocker,
    faGitAlt,
    faJsSquare,
    faPython,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const aboutMe = ['A','B','O','U','T', ' ', 'M','E']
    useEffect(() => {
        // Set a timer to execute the setLetterClass function after 3000 milliseconds (3 seconds)
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000); // 3000 milliseconds = 3 seconds
      
        // Cleanup function to clear the timer if the component unmounts before the timer fires
        return () => clearTimeout(timer);
      }, []);
      return (
        <>
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={aboutMe}
                  idx={15}
                />
              </h1>
              <p>
                I'm a very ambitious front-end developer looking for a role in an
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
              </p>
              <p align="LEFT">
                I'm quiet confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
              <p>
                If I need to define myself in one sentence that would be a family
                person, father of a beautiful daughter, a sports fanatic,
                photography enthusiast, and tech-obsessed!!!
              </p>
            </div>
    
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faPython} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faDocker} color="#F06529" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faCloud} color="#28A4D9" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
          <Loader type="pacman" />
        </>
      )
    }

export default About;