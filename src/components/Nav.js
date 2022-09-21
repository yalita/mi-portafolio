import React from 'react'
import '../styles/nav.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <div className='main_container'>
        <nav>
          <div className='nav_container'>
            <a href='/' className='name'>
            <p>Y a m i l</p>
            </a>
            <div className='nav_options'>
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className='nav_home'>
                Home
              </Link>
              <Link to="skills" spy={true} smooth={true} offset={-180} duration={500} className='nav_home'>
                Skills
              </Link>
              <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='nav_home'>
                Projects
              </Link>
            </div>
            <div className='nav_icons'>
            <a href='https://www.linkedin.com/in/yamil-llaver-80535b231/'>
              <LinkedInIcon className='nav_profiles' />
            </a>
            <a href='https://github.com/yalita' >
            <GitHubIcon className='nav_profiles'/>
            </a>
            </div>
            <div className='nav_connect'>
              <Link to="connect" spy={true} smooth={true} offset={-70} duration={500}>
                <button className='nav_button'>
                  
                  <span className='nav_button_contain'>Let's Connect!</span>
                  
                </button>
              </Link>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Nav