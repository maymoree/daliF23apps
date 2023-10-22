// ***********************************************
// Memo Tangtipongkul, Fall 2023
// ***********************************************

import React, { useState, useEffect } from 'react';
import fetchUserData from '../components/userData';
import Heart from "react-animated-heart";

// ***********************************************
// the post component -- one of the two additional features!
// allows user to browse through the fall activities that dali members have posted
// added a post variable under the first 30 Dali members in the .json file 
// user can like the post (further implementation needed)
// ***********************************************

const Post = () => {

    const [postUser, setPostUser] = useState([]); // array for first 30 Dali members; posts under them

    // one of the two additional features!
    const [heartStates, setHeartStates] = useState([]); // keeps track of heart button for each post

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserData();
            setPostUser(data.slice(0, 30)); // slices data from all the users
            setHeartStates(new Array(data.slice(0, 30).length).fill(false)); // creates array

        };

        fetchData();
    }, []);

    // allows for pressing and unpressing heart
    const toggleHeart = (index) => {
        const newHeartStates = [...heartStates];
        newHeartStates[index] = !newHeartStates[index];
        setHeartStates(newHeartStates);
    };

    return (
        <div className='postPage'>

            {/* title of the page */}
            <div style={{ fontWeight: 500, fontSize: 30}}>🍁 dali fall activities 🍂</div>

            {/* maps through each dali member in the sliced array */}
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

                    {/* updates the state of the heart button */}
                    <Heart className='heartIcon' isClick={heartStates[index]} onClick={() => toggleHeart(index)} />

                </div>

            ))}
        </div>
    )
}

export default Post;