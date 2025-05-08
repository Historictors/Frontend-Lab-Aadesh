import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post, onDelete }) { return (
<div className="card mb-3">
<div className="card-body">
<h5 className="card-title">{post.title}</h5>
<p className="card-text">{post.content}</p>
<Link to={`/edit-post/${post.id}`} className="btn btn-primary me-2"> Edit
</Link>
<button onClick={() => onDelete(post.id)} className="btn btn-danger"> Delete
</button>
</div>
</div>
);
}

export default Post;
