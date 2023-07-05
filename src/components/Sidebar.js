import React from 'react';
import './sidebar.css'

const Sidebar = () => {

    const navbar = [
        {name: 'Inicio'},
        {name: 'Explorar'},
        {name: 'Notificaciones'},
        {name: 'Mensajes'},
        {name: 'Listas'},
        {name: 'Guardado'},
        {name: 'Perfil'},
        {name: 'Mas opciones'},
    ]

    return(
        <div className='menu'>
            {navbar.map((element)=>{
                return <li className='menu-items'>{element.name}</li>
            })}
        </div>
    )
}

export default Sidebar;