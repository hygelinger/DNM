import React from 'react';
import '../../App.css'
//import { Button } from '../Button';
import '../Noseque.css';
//import video from "../videops.mp4";
//import {TweenMax, Power3} from 'gsap' 
import '../Glitch.css'
import "tailwindcss/tailwind.css"
import '../Cards.css'
import ima1 from '../imagenes/tumb1.jpg'
import ima2 from '../imagenes/tumb2.jpg'
import ima3 from '../imagenes/tumb3.jpg'
import Carditem from '../CarditemYT'

function videos (){
    return(
        <>
            <div className='noseque-container2'>
           
             
            <h1 className="glitch">
                 <span aria-hidden="true">VIDEOS</span>
                 VIDEOS
                <span aria-hidden="true">VIDEOS</span>
            </h1>
    

        </div>
        <div className='cards'>
        <h1> Ve los últimos videos de DNM </h1>
        <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <Carditem
                            src={ima1} 
                            text="6 LEYENDAS URBANAS de la CDMX PERTURBADORAS"
                            label='Leyendas urbanas'
                            path='https://www.youtube.com/watch?v=lMPkbKYe7uQ'
                            
                        />

                            <Carditem
                            src={ima2} 
                            text="8 Frases de PSICOPATAS que te HELARAN la sangre"
                            label='Asesinos'
                            path='https://www.youtube.com/watch?v=ekzyukP03Bw'
                            
                        />

                    </ul>
                    <ul>
                    <Carditem
                            src={ima3} 
                            text="6 Videos ATERRADORES que NO DEBERIAS ver solo"
                            label='Top videos'
                            path='https://www.youtube.com/watch?v=D8Q7FOfB0Ks'
                            
                        />

                    </ul>
                </div>
            </div>
            </div>
        </>
    )

}

export default videos