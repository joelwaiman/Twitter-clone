import React, { useEffect, useState } from 'react';

import { FaRetweet, FaRegComment, FaRegHeart, FaRegTrashCan } from "react-icons/fa6";
import { IoLocationOutline, IoImageOutline } from "react-icons/io5";
import { BsFiletypeGif, BsListUl, BsEmojiSmile } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

import './feed.css'
import img from '../assets/user.jpg'


const Feed = () => {

    const [tweets, setTweets] = useState([]);
    const [input, setInput] = useState('');


    useEffect(() => {
        const storedTweets = JSON.parse(localStorage.getItem('tweets'));
        if (storedTweets) {
            setTweets(storedTweets)
        }
        console.log(storedTweets);
    }, [])

    const handlerTweets = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const addTweet = () => {
        if (tweets.find(tweet => tweet.text === input)) {
            toast.error("Ups! Ya has dicho eso :s",{
                style:{
                    background: '#EB455F',
                    color: 'white'
                }
            });
        } else {
            const newTweet = { id: input, text: input }
            const newTweets = ([newTweet, ...tweets])
            setInput('')
            setTweets(newTweets)
            localStorage.setItem('tweets', JSON.stringify(newTweets));
        }
    }

    const deleteTweet = (id) => {
        const tweetToDelete = tweets.filter(tweet => tweet !== id);
        setTweets(tweetToDelete);
        localStorage.setItem('tweets', JSON.stringify(tweetToDelete));
    }

    const iconsInput = [
        { id: 0, item: <IoImageOutline /> },
        { id: 1, item: <BsFiletypeGif /> },
        { id: 2, item: <BsListUl /> },
        { id: 3, item: <BsEmojiSmile /> },
        { id: 4, item: <IoLocationOutline /> },
    ]

    return (
        <div className='container-feed'>
            <p className='title'>Inicio</p>
            <div className='container-input'>
                <div className='container-input-tweet'>
                    <Toaster
                    position="bottom-center" />
                    <img className='user-img' src={img} alt='egg' />
                    <input className='input' onChange={handlerTweets} value={input} placeholder='¡¿Qué está pasando?!' />
                </div>
                <div className='container-input-button'>
                    <div className='icon'>
                        {iconsInput.map((icon) => {
                            return <p key={icon.id}>{icon.item}</p>
                        })}
                    </div>
                    <button disabled={input === ''} onClick={addTweet}>Twittear</button>
                </div>
            </div>
            <>
                {(tweets.length) === 0 ?
                    <h2 className='empty'>
                        ¡Aún no has dicho nada!
                    </h2>
                    :
                    <>
                        {tweets.map((data) => {
                            return <div key={data.id} className='container-tweets'>
                                <div>
                                    <img src={img} alt='egg' />
                                </div>
                                <div className='container-tweets-data'>
                                    <p><b>User </b> <span> @egg</span></p>
                                    <p className='tweet'>{data.text}</p>
                                    <div className='iconsTweet'>
                                        <FaRegComment className='comment' />
                                        <FaRetweet className='rt' />
                                        <FaRegHeart className='heart' />
                                        <FaRegTrashCan onClick={() => deleteTweet(data)} className='trash' />
                                    </div>
                                </div>
                            </div>
                        })}
                    </>
                }
            </>
        </div>
    )
}

export default Feed;