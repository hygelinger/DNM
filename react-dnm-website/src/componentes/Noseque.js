import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Noseque.css';
import video from "../videops.mp4";
//import {TweenMax, Power3} from 'gsap' 
import './Glitch.css'
import "tailwindcss/tailwind.css"

function Noseque() {
    return (
        <div className='noseque-container'>
            <video controls autoPlay loop muted>
             <source src={video} type="video/mp4" />
            </video>
            
            
            <h1 className="glitch">
                 <span aria-hidden="true">DONDE NACE EL MIEDO</span>
                 DONDE NACE EL MIEDO
                <span aria-hidden="true">DONDE NACE EL MIEDO</span>
            </h1>

            <p>Recuerda siempre mirar atras</p>
 

            <div className="hero-btns">
                <Button 
                className="btns" 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    ADENTRATE AL MISTERIO
                </Button>
                <Button 
                className="btns" 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    MIRA EL ÚLTIMO VIDEO <i className='far fa-play-circle'></i>
                </Button>
            </div>

             
            

        </div>
    );
}

export default Noseque


