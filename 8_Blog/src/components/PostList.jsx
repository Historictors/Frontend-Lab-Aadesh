import React from 'react'; import Post from './Post';

function PostList({ posts, deletePost }) { return (
<div>
<h1>Blog Posts</h1>
{posts.length === 0 ? (
<p>No posts yet. Add one!</p>
) : (
posts.map(post => (
<Post key={post.id} post={post} onDelete={deletePost} />
))
)}
</div>
);
}

export default PostList;