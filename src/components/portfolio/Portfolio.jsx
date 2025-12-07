import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/picture.jpg'
import IMG2 from '../../assets/picture.jpg'
import IMG3 from '../../assets/picture.jpg'
import IMG4 from '../../assets/picture.jpg'
import IMG5 from '../../assets/picture.jpg'
import IMG6 from '../../assets/picture.jpg'
export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/**/ }
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt=" "/>
          </div>
          <h3>Assembler VC-407 (C++)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/Assembler" className='btn' target='blank' >GitHub</a>
          </div>
        </article>
        {/*End of Portfolio Project 1*/ }
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt=" "/>
          </div>
          <h3>Weather API (Kotlin Java)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/Projects" className='btn' target='blank' >GitHub</a>
          </div>
        </article>
        {/*End of Portfolio Project 2*/ }

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt=" "/>
          </div>
          <h3>Photography-Portfolio (HTML/CSS)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/Projects" className='btn' target='blank' >GitHub</a>
          </div>
        </article>
        {/*End of Portfolio Project 3*/ }

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt=" "/>
          </div>
          <h3>React-Portfolio (Javascript, HTML, CSS, and React)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/React-Portfolio-Website" className='btn' target='blank' >GitHub</a>
          <a href="demo" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article> */}
        {/*End of Portfolio Project 4*/ }

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt=" "/>
          </div>
          <h3>Coin Game Website (Javacript, HTMl, and CSS)</h3>
          <div className="portfolio__items-cta">
          <a href="https://github.com/csisilli/CoinCollectorGames" className='btn' target='blank' >GitHub</a>
          <a href="demo" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
        </article>
        {/*End of Portfolio Project 5*/ }
      </div>
    </section>
  )
}
export default Portfolio