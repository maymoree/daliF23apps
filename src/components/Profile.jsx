// ***********************************************
// Memo Tangtipongkul, Fall 2023
// ***********************************************

import React, { useState, useEffect } from 'react';
import fetchUserData from '../components/userData';

// ***********************************************
// the profile component -- a required feature
// allows user to browse through all the dali members' profiles
// has fall decorations around the profile photo
// ***********************************************

const Profile = () => {

    const [userData, setUserData] = useState([]); // array for all Dali members

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserData();
            setUserData(data);
        };

        fetchData();
    }, []);

    // shortens long strings
    const truncateText = (text, maxLength) => {
        // check if string is null or undefined
        if (text === null || text === undefined) {
            return "uh oh empty!";
        }
        // returns substring of the long string if longer than maxLength
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };


    return (
        <div className='profPage'>

            {/* title of the page */}
            <div style={{ fontWeight: 500, fontSize: 30, textAlign: 'center', paddingBottom: 10}}>♡ dali members 🧁</div>

            {/* maps through all dali members' data */}
            {userData.map((user, index) => (

                <div className='profContainer' key={index}>

                    {/* the header consists of the profile picture, and name */}
                    <div className='profHeader'>

                        <div className='profPicContainer'>
                            <div className='bckgrnd'></div>
                            <img className='profPic' src={user.picture}></img>
                            <div className='leaves'></div>
                        </div>
                        
                        <div className='profHeaderTexts'>
                            <div style={{ fontWeight: 500, fontSize: 25, paddingBottom: 5}}>{user.name}</div>
                            <div style={{ fontWeight: 500, fontSize: 19, paddingBottom: 3}}>📚 {user.year}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>📍 {user.home}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>🎂 {user.birthday}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>
                                🌲 {truncateText((user["favorite dartmouth tradition"]), 20)}
                            </div>
                        </div>
                    </div>

                    {/* the middle part consists of position(s) at DALI, and a fun fact */}
                    <div className='profMid'>
                        <div className='position'>
                            <div style={{ fontWeight: 700, fontSize: 15, paddingBottom: 3}}>In DALI, I am a...</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>{user.dev && <div>Dev</div>}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>{user.des && <div>Des</div>}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>{user.pm && <div>PM</div>}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>{user.core && <div>Core</div>}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>{user.mentor && <div>Mentor</div>}</div>
                        </div>
                        <div className='funfact'>
                            <div style={{ fontWeight: 700, fontSize: 15, paddingBottom: 3}}>Did you know?</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>{truncateText((user["fun fact"]), 100)}</div>
                        </div>
                    </div>

                    {/* the bottom part consists of favorites things, and their studies */}
                    <div className='profBot'>
                        <div className='favs'>
                            <div style={{ fontWeight: 700, fontSize: 15, paddingBottom: 3}}>Things I Love:</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>- {truncateText((user["favorite thing 1"]), 40)}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>- {truncateText((user["favorite thing 2"]), 40)}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>- {truncateText((user["favorite thing 3"]), 40)}</div>
                        </div>
                        <div className='studies'>
                            <div style={{ fontWeight: 500, fontSize: 15}}>Major: {truncateText(user.major, 50)}</div>
                            <div style={{ fontWeight: 500, fontSize: 15}}>Minor: {truncateText(user.minor, 50)}</div>
                        </div>
                    </div>

                    {/* last part is the quote */}
                    <div className='quote'>
                        <div style={{ fontWeight: 500, fontSize: 15, padding: 20}}>{truncateText(user.quote, 300)}</div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default Profile;