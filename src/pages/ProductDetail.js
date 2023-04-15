import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
    const params = useParams();

    return (
        <div>
            <h1>ProductDetail</h1>
            <p>{params.productId}</p>
            <Link to=".." relative="route">
                route sẽ quay lại link route
            </Link>
            <br />
            <Link to=".." relative="path">
                path sẽ quay lại link trước của đường dẫn
            </Link>
        </div>
    );
}

export default ProductDetail;
