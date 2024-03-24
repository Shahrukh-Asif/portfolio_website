import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import AnimatedLetters from '../AnimatedLetter';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h','a','h','r','u','k','h']
    const jobArray = ['d','a','t','a',' ','e','n','g','i','n','e','e','r','.']
    
    useEffect(() => {
        // Set a timer to execute the setLetterClass function after 3000 milliseconds (3 seconds)
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000); // 3000 milliseconds = 3 seconds
      
        // Cleanup function to clear the timer if the component unmounts before the timer fires
        return () => clearTimeout(timer);
      }, []);
    
    return  (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> &nbsp;
                <img src={LogoTitle} alt="Data Engineer / Developer"/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx = {15}
                    />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx = {22}
                    />
                </h1>
                <h2>Data Engineer / Software Developer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman'/>
        </>
    )
};

export default Home