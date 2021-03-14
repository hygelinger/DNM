import React from 'react'

const contact = () => {
    return (
        <form className="form">
            <h1>Contacto</h1>
            <label>Nombre</label>
            <input placeholder="Nombre"> </input>

            <label>Email</label>
            <input placeholder="Email"> </input>

            <label>Mensaje</label>
            <textarea placeholder="Mensaje"> </textarea>


        </form>
    )
}

export default contact
