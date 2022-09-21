import React from 'react'
import '../styles/home.css'
import bats from '../port-removebg-preview.png'

const Home = () => {
  return (
    <div className='home' id='home'>
        <section className='home_firstSection'>
            <div className='bats_contain'>
            <img className='bats' src={bats} />
            </div>
        <div className='home_presentation'>
        <button className='home_presentationWel'>Welcome to my portafolio</button>
        <h1 className='home_presentationTitle' >Hi ! i'm Yamil Web Developer </h1>
        <p className='home_presentationStudies'>i did more than 30 courses in platzi academy and some works freelance. I integrate easily, i learn very fast and i am always studying new technologies to get closer to where i want to be.</p>
        </div>
        </section>
    </div>
  )
}

export default Home