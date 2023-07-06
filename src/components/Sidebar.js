import React from 'react';
import './sidebar.css'
import { FaTwitter, FaRegEnvelope, FaListUl, FaRegBookmark } from 'react-icons/fa';
import { RiHome7Fill } from "react-icons/ri";
import { IoNotificationsOutline, IoPersonOutline, IoSearch } from "react-icons/io5";

const Sidebar = () => {

    const navbar = [
        { id:0 ,name: 'Inicio', icon: < RiHome7Fill /> },
        { id:1 ,name: 'Explorar', icon: <IoSearch/>},
        { id:2 ,name: 'Notificaciones', icon: <IoNotificationsOutline/>},
        { id:3 ,name: 'Mensajes', icon: <FaRegEnvelope/>},
        { id:4 ,name: 'Listas', icon: <FaListUl/>},
        { id:5 ,name: 'Guardado', icon: <FaRegBookmark/>},
        { id:6 ,name: 'Perfil', icon: <IoPersonOutline/>},
    ]

    return (
        <div className='menu'>
            <FaTwitter className='menu-logo' />
            {navbar.map((element) => {
                return <div className='menu-items' key={element.id}>
                        <p className='menu-items-icon'>{element.icon}</p>
                        <p>{element.name}</p>
                    </div>
            })}
        </div>
    )
}

export default Sidebar;