import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; import PostForm from './PostForm';
function EditPost({ posts, updatePost }) { const { id } = useParams();
const navigate = useNavigate();
const post = posts.find(p => p.id === Number(id));

const handleSubmit = (updatedPost) => { updatePost(updatedPost); navigate('/posts');
};

if (!post) {
return <div>Post not found</div>;
}

return (
<div>
<h1>Edit Post</h1>
<PostForm initialPost={post} onSubmit={handleSubmit} />
</div>
);
}

export default EditPost;
