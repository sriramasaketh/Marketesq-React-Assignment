import axios from 'axios';


const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    throw error;
  }
};

export const createPost = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};


export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, bookingData);  
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};
