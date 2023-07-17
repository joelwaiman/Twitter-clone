import React, { useEffect, useState } from 'react';
import './feed.css'
import img from '../assets/user.jpg'
import { FaRetweet, FaRegComment, FaRegHeart, FaRegTrashCan } from "react-icons/fa6";
import { IoLocationOutline, IoImageOutline } from "react-icons/io5";
import { BsFiletypeGif, BsListUl, BsEmojiSmile } from "react-icons/bs";


const Feed = () => {

    const storedTweets = JSON.parse(localStorage.getItem('tweets'))

    const [tweets, setTweets] = useState(storedTweets);
    const [input, setInput] = useState('');

    const handlerTweets = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const addTweet = () => {
        if (tweets.find(tweet => tweet === input)) {
            console.log('error');
        } else {
            const newTweet = ([input, ...tweets])
            setInput('')
            setTweets(newTweet)
        }
    }

    const deleteTweet = (id) => {
        const tweetToDelete = tweets.filter(tweet => tweet !== id);
        setTweets(tweetToDelete);
    }

    useEffect(() => {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }, [tweets])


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
                    {tweets.map((data) => {
                        return <div className='container-tweets'>
                            <div>
                                <img src={img} alt='egg' />
                            </div>
                            <div className='container-tweets-data'>
                                <p><b>User </b> <span> @egg</span></p>
                                <p className='tweet'>{data}</p>
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
        </div>
    )
}

export default Feed;