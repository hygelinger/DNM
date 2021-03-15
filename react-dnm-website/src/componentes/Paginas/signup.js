import React from 'react'
import '../../App.css'
//import Cards from '../Cards'
//import Noseque from '../Noseque'
import "../signup.css"

function signup (){
    return(
        <section className="login">
            <div className="loginContainer">
                <h1>Ingresa ahora</h1>
                <li>   </li>
                <label >Username</label>
                <input type="text" autoFocus required/>
                <label>Password</label>
                <input type="text" autoFocus required/>
                <div className="btnContainer">
                <button>
                            Ingresa
                        </button>
                        <p> No tienes una cuenta? <span>Ingresa ahora </span></p>

                    
                </div>


            </div>


        </section>
    )

}

export default signup