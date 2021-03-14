import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
import ima1 from '../im1.jpg'
import ima2 from '../im2.jpg'
import ima3 from '../tm1.jpg'
import ima4 from '../tm2.jpg'
import ima5 from '../tm3.jpg'
import ima6 from '../tm4.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1> Adentrate en el mundo del terror </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem
                            src={ima1} 
                            text="Leyendas Urbanas de México"
                            label='Leyendas'
                            path='/videos'
                            
                        />
                        <Carditem
                            src={ima2} 
                            text="¿Tienes una historia? Ponte en contacto y aparece en el próximo video"
                            label='Contacto'
                            path='/contacto'
                            
                        />
                        <Carditem
                            src={ima3} 
                            text="Mira las fotos más terrorificas"
                            label='Galeria'
                            path='/galeria'
                            
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src={ima4} 
                            text="Acerca de esta página"
                            label='About'
                            path='/about'
                            
                        />
                        <Carditem
                            src={ima5} 
                            text="Sigue DNM en Instagram"
                            label='Instagram'
                            path='/instagram'
                            
                        />
                        <Carditem
                            src={ima6} 
                            text="Mira el último video en la web"
                            label='Web player'
                            path='/webplayerr'
                            
                        />

                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
