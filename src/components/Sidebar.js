import React from 'react';
import './sidebar.css'
import { FaTwitter, FaRegEnvelope, FaListUl, FaRegBookmark } from 'react-icons/fa';
import { RiHome7Fill } from "react-icons/ri";
import { IoNotificationsOutline, IoPersonOutline, IoSearch } from "react-icons/io5";

const Sidebar = () => {

    const navbar = [
        { name: 'Inicio', icon: < RiHome7Fill /> },
        { name: 'Explorar', icon: <IoSearch/>},
        { name: 'Notificaciones', icon: <IoNotificationsOutline/>},
        { name: 'Mensajes', icon: <FaRegEnvelope/>},
        { name: 'Listas', icon: <FaListUl/>},
        { name: 'Guardado', icon: <FaRegBookmark/>},
        { name: 'Perfil', icon: <IoPersonOutline/>},
    ]

    return (
        <div className='menu'>
            <FaTwitter className='menu-logo' />
            {navbar.map((element) => {
                return <>
                    <div className='menu-items'>
                        <p className='menu-items-icon'>{element.icon}</p>
                        <p>{element.name}</p>
                    </div>
                </>
            })}
        </div>
    )
}

export default Sidebar;