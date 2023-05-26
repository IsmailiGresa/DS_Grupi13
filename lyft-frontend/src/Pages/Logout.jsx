import axios from 'axios';

const Logout = () => {
    const handleLogout = () => {
        axios.post('/api/logout')
            .then(response => {
                // Clear any local storage or state related to the user's authentication
                // Redirect the user to the login page or any other desired page

                // Remove the token from local storage
                localStorage.removeItem('token');


                // Replace '/login' with the appropriate route for your login page
                window.location.href = '/login';

            })
            .catch(error => {
                // Handle error if the logout request fails
                console.error('Logout failed:', error);
            });
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;















// export default function Logout(){
//     return(
//         <div>
//             Logout
//         </div>
//     )
// }


