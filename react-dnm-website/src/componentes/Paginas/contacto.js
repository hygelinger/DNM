import React from 'react';
import '../../App.css'
//import { Button } from '../Button';
import '../Noseque.css';
//import video from "../videops.mp4";
//import {TweenMax, Power3} from 'gsap' 
import '../Glitch.css'
import "tailwindcss/tailwind.css"
import '../Cards.css'
import '../contacto.css'


function contacto (){
    return(
        
        <form className="form">

            
        <h1>CONTACTO</h1>
        <label>Nombre</label>
        <input placeholder="nombre" />
        <label>Email</label>
        <input placeholder="email" />
        <label>Mensaje</label>
        <textarea placeholder="Mensaje"></textarea>

        


    </form>

        
    )

}

export default contacto