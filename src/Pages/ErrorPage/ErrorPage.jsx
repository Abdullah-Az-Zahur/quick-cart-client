import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Error.......</h2>
            <Link to='/' className='btn'>Home</Link>
        </div>
    );
};

export default ErrorPage;