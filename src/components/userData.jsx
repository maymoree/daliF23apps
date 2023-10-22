// ***********************************************
// Memo Tangtipongkul, Fall 2023
// ***********************************************

import React from 'react';
import data from '../data/dali_social_media.json';

// ***********************************************
// function that fetches data
// used in Post.jsx and Profile.jsx
// ***********************************************

const fetchUserData = async () => {
    try {
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export default fetchUserData;