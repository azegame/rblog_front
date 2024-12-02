import axios from 'axios'; 

export const fetchPosts = async () => {
  const response = await axios.get('https://localhost:3000/posts');
  return response;
}