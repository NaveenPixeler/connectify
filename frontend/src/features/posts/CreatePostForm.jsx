import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const CreatePostForm = ({ onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title && content && image) {
      onCreatePost({ title, content, image });
      setTitle("");
      setContent("");
    }
  };

  return (
    <Box mb={3}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Content"
        variant="outlined"
        fullWidth
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Create Post
      </Button>
    </Box>
  );
};

export default CreatePostForm;
