import React from 'react';
import './feed.css'
import { useState } from 'react';
import img from '../assets/user.jpg'

const Feed = () => {

    const [tweets, setTweets] = useState([]);
    const [input, setInput] = useState('');

    const handlerTweets = (e) => {
        const {value} = e.target;
        setInput(value)
    }

    const addTweet = () => {
        const newTweet = ([...tweets, input])
        setInput('')
        setTweets(newTweet)
    }

    return(
        <div className='container-feed'>
            <p>Inicio</p>
            <div className='container-input'>
                <img className='user-img' src={img} alt='egg' />
                <input className='input' onChange={handlerTweets} value={input} placeholder='Que estas pensando?!'/>
                <button disabled={input===''} onClick={addTweet}>Twittear</button>
            </div>
            <ul className='container-tweets'>
                <li>
                    {tweets.map((data)=>{
                        return <p key={data}>{data}</p>
                    })}
                </li>
            </ul>
        </div>
    )
}

export default Feed;