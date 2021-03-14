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
import ima2 from '../../tm4.jpg'
import ima3 from '../../tm3.jpg'
import ima4 from '../../tm2.jpg'
import ima5 from '../../tm1.jpg'
import ima6 from '../../im4.jpg'
import Carditem from '../CarditemYT'





function Galeria() {
  
    return (
        <>
        <div className='noseque-container2'>
       
         
        <h1 className="glitch">
             <span aria-hidden="true">GALERIA</span>
             GALERIA
            <span aria-hidden="true">GALERIA</span>
        </h1>


    </div>
    <div className='cards'>
    <h1> Las fotos más terrorificas del internet en un solo lugar </h1>
    <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <Carditem
                        src={ima1} 
                        text=<div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl mb-2">
                          Photo by Israel Cardenas
                        </div>
                        <ul>
                          <li>
                            <strong>Views: 4000</strong>
                          </li>
                          <li>
                            <strong>Downloads: 300</strong>
                      
                          </li>
                          <li>
                            <strong>Likes: 10000 </strong>
                
                          </li>
                        </ul>
                      </div>
                        label='Instagram'
                        path='https://www.instagram.com/dnmiedo'
                        
                    />
                
                <Carditem
                        src={ima2} 
                        text=<div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl mb-2">
                          Photo by Juan Escutia
                        </div>
                        <ul>
                          <li>
                            <strong>Views: 3000</strong>
                          </li>
                          <li>
                            <strong>Downloads: 3000</strong>
                      
                          </li>
                          <li>
                            <strong>Likes: 1000 </strong>
                
                          </li>
                        </ul>
                      </div>
                        label='Instagram'
                        path='https://www.instagram.com/dnmiedo'
                        
                    />
                        
                
                </ul>
                <ul>
                <Carditem
                        src={ima4} 
                        text=<div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl mb-2">
                          Photo by Sergio Salvador
                        </div>
                        <ul>
                          <li>
                            <strong>Views: 100</strong>
                          </li>
                          <li>
                            <strong>Downloads: 300</strong>
                      
                          </li>
                          <li>
                            <strong>Likes: 400 </strong>
                
                          </li>
                        </ul>
                      </div>
                        label='Instagram'
                        path='https://www.instagram.com/dnmiedo'
                        
                    />
                        
                <Carditem
                        src={ima5} 
                        text=<div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl mb-2">
                          Photo by Israel Cardenas
                        </div>
                        <ul>
                          <li>
                            <strong>Views: 4000</strong>
                          </li>
                          <li>
                            <strong>Downloads: 300</strong>
                      
                          </li>
                          <li>
                            <strong>Likes: 10000 </strong>
                
                          </li>
                        </ul>
                      </div>
                        label='Instagram'
                        path='https://www.instagram.com/dnmiedo'
                        
                    />
                        
                <Carditem
                        src={ima6} 
                        text=<div className="px-6 py-4">
                        <div className="font-bold text-purple-500 text-xl mb-2">
                          Photo by Israel Cardenas
                        </div>
                        <ul>
                          <li>
                            <strong>Views: 4000</strong>
                          </li>
                          <li>
                            <strong>Downloads: 300</strong>
                      
                          </li>
                          <li>
                            <strong>Likes: 10000 </strong>
                
                          </li>
                        </ul>
                      </div>
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

export default Galeria
