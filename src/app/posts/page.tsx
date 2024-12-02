"use client";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '@/types/Post';

const PostPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:3000/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    }
    fetchPosts();
  }, []);
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id} className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{post.id}</td>
              <td className="border border-gray-300 px-4 py-2">{post.title}</td>
              <td className="border border-gray-300 px-4 py-2">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostPage;