import React from 'react';
import data from '../data/dali_social_media.json';

const fetchUserData = async () => {
    try {
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  export default fetchUserData;