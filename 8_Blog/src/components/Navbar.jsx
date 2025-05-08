import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() { return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
<div className="container-fluid">
<Link className="navbar-brand" to="/">My Blog</Link>
<div className="navbar-nav">
<Link className="nav-link" to="/">Home</Link>
<Link className="nav-link" to="/about">About</Link>
<Link className="nav-link" to="/posts">Posts</Link>
<Link className="nav-link" to="/add-post">Add Post</Link>
</div>
</div>
</nav>
);
}

export default Navbar;