import React from 'react';
import '../../App.css'
//import { Button } from '../Button';
import '../Noseque.css';
//import video from "../videops.mp4";
//import {TweenMax, Power3} from 'gsap' 
import '../Glitch.css'
import "tailwindcss/tailwind.css"
import '../Cards.css'
import ima1 from '../../tm5.jpg'
import Carditem from '../CarditemYT'

function Instagram (){
    return(
        <>
            <div className='noseque-container2'>
           
             
            <h1 className="glitch">
                 <span aria-hidden="true">INSTAGRAM</span>
                 INSTAGRAM
                <span aria-hidden="true">INSTAGRAM</span>
            </h1>
    

        </div>
        <div className='cards'>
        <h1> Ve los últimos videos de DNM </h1>
        <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <Carditem
                            src={ima1} 
                            text="Da click y sigue a DNM en Instagram"
                            label='Instagram'
                            path='https://www.instagram.com/dnmiedo'
                            
                        />

                    </ul>
                </div>
            </div>
            </div>
        </>
    )

}

export default Instagram