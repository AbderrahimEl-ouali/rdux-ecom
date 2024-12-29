import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/usersSlice';
import '../styles/login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedUser = useSelector((state) => state.users.loggedUser);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }));
        if (!loggedUser) {
            setError('Invalid username or password');
        }
    };

    useEffect(() => {
        if (loggedUser) {
            navigate('/home'); 
        }
    }, [loggedUser, navigate]);

    return (
<div className="login-container">
    <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Submit</button>
        </form>
    </div>
</div>
    );
};

export default Login;
