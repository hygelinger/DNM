import React from 'react'
import '../Cards.css'
import Carditem from '../CarditemYT'
import '../Glitch.css'
//import ima1 from '../../im1.jpg'
//import ima2 from '../../im2.jpg'
import ima3 from '../../tm1.jpg'
function About() {
    return(
        <>
            <div className='noseque-container2'>
           
             
            <h1 className="glitch">
                 <span aria-hidden="true">ACERCA DE</span>
                 ACERCA DE
                <span aria-hidden="true">ACERCA DE</span>
            </h1>
    

        </div>
        <div className='cards'>
        <h1> Donde nace el miedo es un proyecto dedicado al terror y misterio, nacido en 2010 de la radio a Youtube, Donde nace el miedo trata de abarcar los temas más importantes de indole paranormal. </h1>
        <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <Carditem
                            src={ima3} 
                            text="Hoy, te presentare mi página web, aquí, Donde nace el miedo"
                            label=''
                            path='https://www.youtube.com/watch?v=D8Q7FOfB0Ks'
                            
                        />
                    </ul>
          
                </div>
            </div>
            </div>
        </>
    )

}


export default About
