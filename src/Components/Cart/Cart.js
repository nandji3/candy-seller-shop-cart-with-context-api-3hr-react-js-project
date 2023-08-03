import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../Store/CartContext";


const Cart = () => {

    const cartCTX = useContext(CartContext);

    const totalAmount = `${cartCTX.totalAmount.toFixed(2)}`;

    const hasItems = cartCTX.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCTX.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
        cartCTX.addItem({ ...item, quantity: 1 });
    }

    const itemList = <ul className={styles.cartItems}>
        {
            cartCTX.items.map((item) => {
                return (<li className={styles.cartItem}>
                    <div>
                        <h2>{item.candyName}</h2>
                        <div className={styles.summary}>
                            <span className={styles.price}>Rs.{item.price}</span>
                            <span className={styles.quantity}>x {item.quantity}</span>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
                        <button onClick={cartItemRemoveHandler.bind(null, item.id)}>−</button>
                    </div>
                </li>)
            })}
    </ul >

    return (
        <Modal>
            {itemList}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>Rs.{totalAmount}/-</span>
            </div>
            <div className={styles.actions1}>
                <button className={styles.buttonClose} onClick={cartCTX.closeCart}>Cancle</button>
                {hasItems && <button className={styles.buttonPlaceOrder} >Place Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;