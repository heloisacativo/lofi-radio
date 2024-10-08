import axios from 'axios';

const API_URL = "http://localhost:3000/songs";

export const allSongs = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}
