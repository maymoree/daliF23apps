import React, { useState, useEffect } from 'react';
import fetchUserData from '../components/userData';
import Heart from "react-animated-heart";


const Post = () => {

    const [postUser, setPostUser] = useState([]); // array for first 30 Dali members; posts under them
    const [heartStates, setHeartStates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserData();
            setPostUser(data.slice(0, 30));
            setHeartStates(new Array(data.slice(0, 30).length).fill(false));

        };

        fetchData();
    }, []);

    const toggleHeart = (index) => {
        const newHeartStates = [...heartStates];
        newHeartStates[index] = !newHeartStates[index];
        setHeartStates(newHeartStates);
    };

    return (
        <div className='postPage'>
            <div style={{ fontWeight: 500, fontSize: 30}}>🍁 dali fall activities 🍂</div>
            {postUser.map((user, index) => (

                <div className='postContainer' key={index}>

                    <div>
                        <img src={user.picture}></img>
                    </div>

                    <div className='texts'>
                        <div className='mainText'>
                            {user.name}                        
                        </div>
                        <div className='bodyText'>
                            {user.post}
                        </div>
                    </div>

                    <Heart isClick={heartStates[index]} onClick={() => toggleHeart(index)} />

                </div>

            ))}
        </div>
    )
}

export default Post;