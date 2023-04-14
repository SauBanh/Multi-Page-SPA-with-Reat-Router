import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return (
        <>
            <div>Home</div>
            <button onClick={navigateHandler}>Navigat</button>
        </>
    );
}

export default Home;
