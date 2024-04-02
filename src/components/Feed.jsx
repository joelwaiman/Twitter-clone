import React, { useEffect, useState, useRef } from 'react';

import { FaRetweet, FaRegComment, FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { IoLocationOutline, IoImageOutline } from "react-icons/io5";
import { BsListUl, BsEmojiSmile } from "react-icons/bs";
import { MdOutlineGifBox } from "react-icons/md";

import toast, { Toaster } from 'react-hot-toast';

import './feed.css'

import img from '../assets/user.jpg'

const Feed = () => {
    const [tweets, setTweets] = useState([]);
    const [input, setInput] = useState('');
    const [imageFromPc, setImageFromPc] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const inputFileRef = useRef(null);

    useEffect(() => {
        const storedTweets = JSON.parse(localStorage.getItem('tweets'));
        if (storedTweets) {
            setTweets(storedTweets)
        }
    }, [])

    const handlerTweets = (e) => {
        const { value } = e.target;
        setInput(value)
    }

    const addTweet = () => {
        if (tweets.find(tweet => tweet.text === input)) {
            toast.error("Ups! Ya has dicho eso :s", {
                style: {
                    background: '#EB455F',
                    color: 'white'
                }
            });
        } else {
            const newTweet = { id: input, text: input, image: imageFromPc }
            const newTweets = ([newTweet, ...tweets])
            setInput('')
            setTweets(newTweets)
            setPreviewImage(null)
            setImageFromPc(null)
            localStorage.setItem('tweets', JSON.stringify(newTweets));
        }
    }

    const deleteTweet = (id) => {
        const tweetToDelete = tweets.filter(tweet => tweet !== id);
        setTweets(tweetToDelete);
        localStorage.setItem('tweets', JSON.stringify(tweetToDelete));
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFromPc(URL.createObjectURL(file));
        setPreviewImage(URL.createObjectURL(file));
    };

    const iconsInput = [
        { id: 0, item: <IoImageOutline onClick={() => inputFileRef.current.click()} /> },
        { id: 1, item: <MdOutlineGifBox /> },
        { id: 2, item: <BsListUl /> },
        { id: 3, item: <BsEmojiSmile /> },
        { id: 4, item: <IoLocationOutline /> },
    ];

    return (
        <div className='container-feed'>
            <p className='title'>Inicio</p>

            <div className='container-input'>
                <div className='container-input-tweet'>
                    <Toaster position="bottom-center" />
                    <img className='user-img' src={img} alt='egg' />
                    <input className='input' onChange={handlerTweets} value={input} placeholder='¡¿Qué está pasando?!' />


                </div>
                {previewImage ?
                    <div className="preview-image-container">
                        <img src={previewImage} alt="tweet" className="preview-image" />
                        <button
                            className="btn-delete-preview-image"
                            onClick={() => setPreviewImage(null)}
                        >
                            X
                        </button>
                    </div>
                    :
                    null}
                <div className='container-input-button'>
                    <div className='icon'>
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputFileRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        {iconsInput.map((icon) => {
                            return <p key={icon.id}>{icon.item}</p>
                        })}
                    </div>
                    <button disabled={input === '' && !previewImage} onClick={addTweet}>Twittear</button>
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
                                    <img
                                    className='image-profile' 
                                    src={img} 
                                    alt='egg' />
                                </div>

                                <div className='container-tweets-data'>
                                    <p><b>User </b> <span> @egg</span></p>
                                    <p className='tweet'>{data.text}</p>
                                    {data.image? <img 
                                    className='tweet-img'
                                    src={data.image} 
                                    alt="tweet" /> 
                                    : 
                                    null}

                                    <div className='iconsTweet'>
                                        <FaRegComment className='comment' />
                                        <FaRetweet className='rt' />
                                        <FaRegHeart className='heart' />
                                        <FaRegTrashAlt onClick={() => deleteTweet(data)} className='trash' />
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
