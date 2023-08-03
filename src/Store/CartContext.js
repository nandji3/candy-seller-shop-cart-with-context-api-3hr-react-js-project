import React from "react";

const CartContext = React.createContext({

    showCart: () => { },
    closeCart: () => { },

    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { },


})
export default CartContext;


























//2nd We nedd to manage that context - by warping <CartConstext.Provider>AppComponent</CartConstext.Provider>