import React from "react";
import Post from "../../components/Post";

const PostList = ({ posts, onLike, onFollow }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={onLike} onFollow={onFollow} />
      ))}
    </div>
  );
};

export default PostList;
