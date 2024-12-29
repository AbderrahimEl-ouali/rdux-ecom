import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/usersSlice';
import { clearCart } from '../features/productsSlice';
import logo from '../assets/logo.png';
import '../styles/nav.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedUser = useSelector((state) => state.users.loggedUser);
    const cartCount = useSelector((state) => state.products.cart?.length || 0); // Safe access and default to 0

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearCart());
        navigate('/login'); 
        
    };

    useEffect(() => {
        if (!loggedUser) {
            navigate('/login'); 
        }
    }, [loggedUser, navigate]); 

   
    
 
    return (
        <nav>
           
            

            <ul>
                <li>
                    <Link to="/">
                        <img src={logo} alt="Site Logo" style={{ height: '40px' }} />
                    </Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart ({cartCount})</Link>
                </li>
                {loggedUser ? (
                    <>
                        <li>
                            <span>{loggedUser}</span>
                        </li>
                        <li>
                            <button className="logout-btn" onClick={handleLogout}>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login">
                            <button className="login-btn">Login</button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
