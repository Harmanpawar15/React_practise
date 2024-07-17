import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
        <div className="w-full flex justify-center mb-4">
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className="rounded-lg object-contain h-20 w-20" // Adjusted size for mini preview
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 text-center">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
