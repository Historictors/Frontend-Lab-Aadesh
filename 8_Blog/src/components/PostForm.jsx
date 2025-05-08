

import React, { useState } from 'react';

function PostForm({ initialPost = { title: '', content: '' }, onSubmit }) { const [post, setPost] = useState(initialPost);

const handleChange = (e) => { const { name, value } = e.target; setPost({ ...post, [name]: value });
};

const handleSubmit = (e) => { e.preventDefault(); onSubmit(post);
};

return (
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label className="form-label">Title</label>
<input type="text"
className="form-control" name="title"
value={post.title} onChange={handleChange} required
/>
</div>
<div className="mb-3">
<label className="form-label">Content</label>
<textarea
className="form-control" name="content" value={post.content} onChange={handleChange} rows="5"
required
/>
</div>
<button type="submit" className="btn btn-primary"> Submit
</button>
</form>
);
}

export default PostForm;