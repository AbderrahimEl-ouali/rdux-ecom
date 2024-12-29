import { createSlice } from '@reduxjs/toolkit';
import macbookAirM1 from '../images/macbook-air-m1.jpg';
import dellXps13 from '../images/dell-xps-13.jpg';
import hpSpectreX360 from '../images/hp-spectre-x360.jpg';
import lenovoThinkpadX1Carbon from '../images/lenovo-thinkpad-x1-carbon.jpg';
import asusRogZephyrusG14 from '../images/asus-rog-zephyrus-g14.jpg';
import lgGram16 from '../images/lg-gram-16.jpg';
import acerSwift3 from '../images/acer-swift-3.jpg';
import microsoftSurfaceLaptop4 from '../images/microsoft-surface-laptop-5.jpg';
import razerBlade15 from '../images/razer-blade-15.jpg';
import samsungGalaxyBookPro from '../images/samsung-galaxy-book-pro.jpg';



const initialState = {
    products: [
        {
            id: 1,
            name: 'Apple MacBook Air M1',
            description: '13-inch, Apple M1 chip, 8GB RAM, 256GB SSD.',
            price: 999,
            discount: 10, 
            image: macbookAirM1,
        },
        {
            id: 2,
            name: 'Dell XPS 13',
            description: '13.4-inch, Intel Core i7, 16GB RAM, 512GB SSD.',
            price: 1249,
            discount: 15, 
            image: dellXps13,
        },
        {
            id: 3,
            name: 'HP Spectre x360',
            description: '14-inch 2-in-1, Intel Core i7, 16GB RAM, 1TB SSD.',
            price: 1399,
            discount: 20, 
            image: hpSpectreX360,
        },
        {
            id: 4,
            name: 'Lenovo ThinkPad X1 Carbon',
            description: '14-inch, Intel Core i7, 16GB RAM, 1TB SSD.',
            price: 1799,
            discount: 0, 
            image: lenovoThinkpadX1Carbon,
        },
        {
            id: 5,
            name: 'Asus ROG Zephyrus G14',
            description: '14-inch, AMD Ryzen 9, 32GB RAM, 1TB SSD, NVIDIA RTX 3060.',
            price: 1599,
            discount: 15, 
            image: asusRogZephyrusG14,
        },
        {
            id: 6,
            name: 'LG Gram 16',
            description: '16-inch, Intel Core i7, 16GB RAM, 1TB SSD.',
            price: 1499,
            discount: 10, 
            image: lgGram16,
        },
        {
            id: 7,
            name: 'Acer Swift 3',
            description: '14-inch, AMD Ryzen 7, 8GB RAM, 512GB SSD.',
            price: 699,
            discount: 5, 
            image: acerSwift3,
        },
        {
            id: 8,
            name: 'Microsoft Surface Laptop 4',
            description: '13.5-inch, Intel Core i5, 8GB RAM, 512GB SSD.',
            price: 999,
            discount: 10, 
            image: microsoftSurfaceLaptop4,
        },
        {
            id: 9,
            name: 'Razer Blade 15',
            description: '15.6-inch, Intel Core i7, 16GB RAM, 1TB SSD, NVIDIA RTX 3070.',
            price: 2199,
            discount: 10, 
            image: razerBlade15,
        },
        {
            id: 10,
            name: 'Samsung Galaxy Book Pro',
            description: '15.6-inch, Intel Core i7, 16GB RAM, 512GB SSD.',
            price: 1099,
            discount: 10, 
            image: samsungGalaxyBookPro,
        },
    ],
    cart: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.cart.find((p) => p.id === action.payload);
            if (productInCart) {
                productInCart.count += 1;
            } else {
                const product = state.products.find((p) => p.id === action.payload);
                if (product) {
                    state.cart.push({ ...product, count: 1 });
                }
            }
        },
        removeFromCart: (state, action) => {
                const id = action.payload; 
                state.cart = state.cart.filter((item) => item.id !== id); 
            
            
        },
        updateCartQuantity: (state, action) => {
            const { id, operation } = action.payload;
            const productInCart = state.cart.find((p) => p.id === id);
            if (productInCart) {
                if (operation === 'increment') {
                    productInCart.count += 1;
                } else if (operation === 'decrement' && productInCart.count > 1) {
                    productInCart.count -= 1;
                }
            }
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart,updateCartQuantity  } = productsSlice.actions;

export default productsSlice.reducer;