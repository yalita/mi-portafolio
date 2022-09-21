import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer_name'>
            <p className='name_move'>Y a m i l</p>
        </div>
        <div className='float'>
        <div className='nav_icons2'>
        <a href='https://www.linkedin.com/in/yamil-llaver-80535b231/'>
              <LinkedInIcon className='nav_profiles2' />
            </a>
            <a href='https://github.com/yalita' >
            <GitHubIcon className='nav_profiles2'/>
            </a>
        </div> 
        <div className='footer_languages'>
        <p>Español idioma nativo </p>
        <p>Ingles avanzado</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer