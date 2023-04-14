import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div>
            <div>Products</div>
            go to<Link to="/">Page Home</Link>
        </div>
    );
}

export default Products;
