import React, {useState} from 'react';

const Login = () => {
    return (
        <div>
            <h1>Admin Login</h1>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="admin@example.com"
                />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                name="password"
                placeholder="qwerty"
                />
            <input style={{ marginTop: '12px' }} type="submit" value="Login" />
        </div>
    );
};

export default Login;