import React, { useState, useReducer, useEffect } from "react";
import CartContext from "./CartContext";


const getLatestFormDataFetchedFromLocalStorage = () => {
    let cartData = JSON.parse(localStorage.getItem("cartItems"));
    if (cartData) {
        return cartData;
    }
    else {
        return [];
    }
}

const defaultCartState = {
    items: getLatestFormDataFetchedFromLocalStorage(),
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    console.log(state.items)
    console.log(action.item)

    if (action.type === "ADD") {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;

        const existingCartItemIndex = state.items.findIndex((item) => (item.id === action.item.id));

        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;
        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity + action.item.quantity };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => (item.id === action.id));

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}


const CartProvider = ({ children }) => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartState.items))
    }, [cartState.items])

    const cartContext = {
        showCart: () => setCartIsShown(true),  //used for open cart
        closeCart: () => setCartIsShown(false), //used for closed cart
        cartIsShown: cartIsShown,  //used for toggle mode


        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;