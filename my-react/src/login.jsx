
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';




function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username: username,
                password: password
            });
            console.log(response.data); 
            if (response.data.success) {
                alert("loggedin successfully")
                navigate('/home',"_blank"); 
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error logging in: ', error);
            alert('An error occurred while logging in. Please try again.'); 
        }
    };

    return (
        <div className="login-container">
            <h1 className="Header">Login</h1>
            <form>
                <input
                    className="username"
                    type="text"
                    id="username"
                    value={username}
                    placeholder=" username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="password"
                    type="password"
                    id="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="login-button" type="submit" onClick={handleLogin}>Login</button>
            </form>
            <Link className="toSignin" to="/signin">Sign in</Link> 
        </div>
    );
}

export default LoginPage;
