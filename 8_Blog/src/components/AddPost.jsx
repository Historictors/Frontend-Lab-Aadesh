
import React from 'react';
import { useNavigate } from 'react-router-dom'; import PostForm from './PostForm';

function AddPost({ addPost }) { const navigate = useNavigate();

const handleSubmit = (post) => { addPost(post); navigate('/posts');
};

return (
<div>
<h1>Add New Post</h1>
<PostForm onSubmit={handleSubmit} />
</div>
);
}

export default AddPost;

