import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([])
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
  }, []);

  return (
    <div className="w-full py-8 bg-gray-50">
      <Container>
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">All Posts</h1>
        <div className="flex flex-wrap -mx-2">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
