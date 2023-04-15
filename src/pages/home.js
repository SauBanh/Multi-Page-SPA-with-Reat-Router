import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return (
        <>
            <div>Home</div>
            go to <Link to="/products">Page Products</Link>
            <br />
            <button onClick={navigateHandler}>Navigat</button>
        </>
    );
}

export default Home;
