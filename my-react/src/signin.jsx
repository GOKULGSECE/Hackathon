import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SigninPage() {
    const [name, setname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const handlesignin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/signin', {
              name: name,
              username: username,
              email: email,
              password: password
            });
            if(response){
                alert("Signedin Successfully");
            }
            console.log(response.data); // Log the response from the server
            // Reset form fields after successful sign-in
            setUsername('');
            setPassword('');
            setemail('');
          } catch (error) {
            console.error('Error signing in:', error);
          }
       
    };

    return (
        <div className="signin-container">
            <h1 className="Header">SignIn</h1>
            <form>
                <input
                    className="name"
                    type="text"
                    id="name"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setname(e.target.value)}
                    required
                />
                <input
                    className="username"
                    type="text"
                    id="username"
                    value={username}
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="email"
                    type="email"
                    id="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setemail(e.target.value)}
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
                <button className="signin-button" type="submit" onClick={handlesignin}>Signin</button>
            </form>
            <Link className="tologin" to="/login">log in</Link> 
        </div>
    );
}

export default SigninPage;
