import React from 'react';
import '../styles/skills.css';
import firebase from '../firebase-removebg-preview.png';


const Skills = () => {

  return (
      <div className='skills_img' id='skills'>
    <div className='skills_container'>
        <h2 className='skills_title'>Skills</h2>
        <p className='skills_studies'>Skills that i manage best.</p>
        <div className='skills'>
            <ul className='skills_list_container'>
                <li>
                    <div className='skills_list'>
                        <img src='https://portofolio-opal-alpha.vercel.app/static/media/meter7.80d7a2dd20d7807717b9072dcec78dac.svg'/>
                        <h5>Git & GitHub</h5>
                    </div>
                </li>
                <li>
                    <div className='skills_list'>
                        <img src='https://portofolio-opal-alpha.vercel.app/static/media/meter4.64d9e0e76154cf546e6a54e6f4bfb9ac.svg' />
                        <h5>Javascript</h5>
                    </div>
                </li>
                <li>
                    <div className='skills_list'>
                        <img src='https://portofolio-opal-alpha.vercel.app/static/media/meter2.e0e2371a0ae9bbffb98e675b3140500a.svg' />
                        <h5>React</h5>
                    </div>
                </li>
                <li>
                    <div className='skills_list'>
                        <img src='https://portofolio-opal-alpha.vercel.app/static/media/meter3.a58a784da3196cc9b6d1887f24f6c8ef.svg' />
                        <h5>Node Js</h5>
                    </div>
                </li>
                <li>
                    <div className='skills_list'>
                        <img src={firebase}/>
                        <h5>Firebase</h5>
                    </div>
                </li>
            </ul>
            {/* <button  className='arrow_left'><NavigateBeforeIcon /></button> */}
            {/* <button  className="arrow_right"><NavigateNextIcon/></button> */}
            </div>
    </div>
    </div>
  )
}


export default Skills