import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL


export const fetchProfile = async(username) =>{
    try {
      const response = await axios.get(`${apiUrl}/${username}`);
      return response.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new Error('User not found');
            }
            throw new Error('An error occurred while fetching the user');
        }
  }