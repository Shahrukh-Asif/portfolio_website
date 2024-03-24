import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img  src={LogoS} alt='logo'/>
            <img  className='sub-logo' src={LogoSubtitle}  alt='shahrukh'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="acive" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d42"/>
            </NavLink>   
            <NavLink exact="true" activeclassname="acive" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d42"/>
            </NavLink> 
            <NavLink exact="true" activeclassname="acive" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d42"/>
            </NavLink>      
        </nav>
        <ul>
            <li>
                    <a target='_blank'  rel="noreferrer" href='https://www.linkedin.com/in/shahrukh-asif-b16b14142/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d42"/>
                    </a>
            </li>
            <li>
                    <a target='_blank'  rel="noreferrer" href='https://github.com/Shahrukh-Asif'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d42"/>

                    </a>
            </li>

        </ul>
    </div>
)

export default Sidebar