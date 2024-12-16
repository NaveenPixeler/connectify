import React, { useState } from "react";
import { Container, Typography, Box, Pagination } from "@mui/material";
import PostList from "../features/posts/PostList";
import CreatePostForm from "../features/posts/CreatePostForm";

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      content: "This is the content of post 1",
      image: "https://via.placeholder.com/400",
      likes: 5,
      userId: 1,
      userName: "User1",
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the content of post 2",
      image: "https://via.placeholder.com/400",
      likes: 2,
      userId: 2,
      userName: "User2",
    },
    {
      id: 3,
      title: "Post 3",
      content: "This is the content of post 3",
      image: "https://via.placeholder.com/400",
      likes: 10,
      userId: 1,
      userName: "User1",
    },
    // Add more posts here...
  ]);
  const [page, setPage] = useState(1);
  const postsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleFollow = (userId) => {
    console.log(`Following user with ID: ${userId}`);
    // Add logic to follow the user, e.g., updating a state or calling an API
  };

  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Feed
      </Typography>

      {/* Create Post Form */}
      <CreatePostForm onCreatePost={addPost} />

      {/* Post List */}
      <PostList
        posts={paginatedPosts}
        onLike={handleLike}
        onFollow={handleFollow}
      />

      {/* Pagination */}
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Container>
  );
};

export default FeedPage;
