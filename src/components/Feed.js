import React from 'react';
import './feed.css'
import { useState } from 'react';
import img from '../assets/user.jpg'
import { IoLocationOutline, IoImageOutline } from "react-icons/io5";
import { BsFiletypeGif, BsListUl, BsEmojiSmile } from "react-icons/bs";


const Feed = () => {

    const [tweets, setTweets] = useState([]);
    const [input, setInput] = useState('');

    const handlerTweets = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const addTweet = () => {
        const newTweet = ([ input, ...tweets])
        setInput('')
        setTweets(newTweet)
    }

    const icons = [
        <IoImageOutline />,
        <BsFiletypeGif />,
        <BsListUl />,
        <BsEmojiSmile />,
        <IoLocationOutline />,
    ]

    return (
        <div className='container-feed'>
            <p className='title'>Inicio</p>
            <div className='container-input'>
                <div className='container-input-tweet'>
                    <img className='user-img' src={img} alt='egg' />
                    <input className='input' onChange={handlerTweets} value={input} placeholder='¡¿Qué está pasando?!' />
                </div>
                <div className='container-input-button'>
                    <div className='icon'>
                        {icons.map((icon) => {
                            return <p>{icon}</p>
                        })}
                    </div>
                    <button disabled={input === ''} onClick={addTweet}>Twittear</button>
                </div>
            </div>
                {tweets.map((data) => {
                    return <div className='container-tweets'>
                        <div>
                            <img src={img} alt='egg' />
                        </div>
                        <div className='container-tweets-data'>
                            <p><b>User </b> <span> @egg</span></p>
                            <p className='tweet'>{data}</p>
                        </div>
                    </div>
                })}
        </div>
    )
}

export default Feed;