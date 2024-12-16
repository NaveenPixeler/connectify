import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton, Box } from '@mui/material';
import { Favorite, PersonAdd } from '@mui/icons-material'; // Use Favorite icon for "love"

const Post = ({ post, onLike, onFollow }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLikes(likes + 1);
    onLike(post.id); // Update global state or backend
  };

  const handleFollow = () => {
    onFollow(post.userId); // Implement follow logic (e.g., follow the user)
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{post.userName}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
        <Box>
          <IconButton color="primary" onClick={handleLike}>
            <Favorite /> {/* Replace thumbs up with love (heart) */}
          </IconButton>
          <Typography variant="body2">{likes} Likes</Typography>
        </Box>
        <Box>
          <IconButton color="secondary" onClick={handleFollow}>
            <PersonAdd />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default Post;
