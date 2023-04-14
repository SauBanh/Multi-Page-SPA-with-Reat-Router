import React from 'react';
import { Link } from 'react-router-dom';

function home() {
    return (
        <div>
            <div>Home</div>
            go to<Link to="/products">Page Products</Link>
        </div>
    );
}

export default home;
