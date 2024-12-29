import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, updateCartQuantity } from '../features/productsSlice';
import '../styles/cart.css';

const Cart = () => {
    const [notification, setNotification] = useState('')
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.products.cart);

    
    const handleRemoveFromCart = (id) => {
        const product = cart.find((item) => item.id === id);
        dispatch(removeFromCart(id));
        setNotification(`${product.name} removed from cart!`);
        setTimeout(() => {
            setNotification('');
        }, 5000);
       
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleQuantityChange = (id, operation) => {
        dispatch(updateCartQuantity({ id, operation })); 
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.count, 0); 
    };
    

    return (
        <div className='containercart'>
        <div className="cart">
            <h1>Your Shopping Cart</h1>
            {notification && <div className="notificationn">{notification}</div>}
            {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
    {cart.map((item) => (
        <li key={item.id} className="cart-item"> 
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p >Price: <span className="item-price">${item.price}</span></p>
                <div className="quantity-controls">
                    <button
                        className="decrement-btn"
                        onClick={() => handleQuantityChange(item.id, 'decrement')} 
                        disabled={item.count <= 1}
                    >
                        -
                    </button>
                    <span className="item-quantity">{item.count}</span> 
                    <button
                        className="increment-btn"
                        onClick={() => handleQuantityChange(item.id, 'increment')} 
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                className="remove-btn"
                onClick={() => handleRemoveFromCart(item.id)} 
            >
                Remove
            </button>
        </li>
    ))}
</ul>
                    
                </>
            )}
        </div>
        <div className="cart-summary">
                        <p className="total-price">Total: ${calculateTotal().toFixed(2)}</p>
                        <div className="cart-actions">
                            <button className="clear-btn" onClick={handleClearCart}>
                                Clear Cart
                            </button>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </div>


        </div>
    );

    
};

export default Cart;
