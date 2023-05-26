import React from 'react';
import axios from 'axios';


const Logout = () => {
    const handleLogout = async () => {
        try {
            // Send a logout request to the backend
            await axios.post('/api/logout');
            // Clear any local storage 
            localStorage.removeItem('token');
            // Redirect the user to the login page
            window.location.href = '/login';
        } catch (error) {
            // Handle error if the logout request fails
            console.error('Logout failed:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
