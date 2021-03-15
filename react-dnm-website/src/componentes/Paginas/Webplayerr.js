import React from 'react'
import video from '../../videoplay.mp4'
import '../Noseque.css';
import Noseque from '../Noseque'

function Webplayerr() {
    return (
        

        <div className='noseque-container'>
        <video controls autoPlay>
         <source src={video} type="video/mp4" />
        </video>
        </div>
        
    )
}

export default Webplayerr
