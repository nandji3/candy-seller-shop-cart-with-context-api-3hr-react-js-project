import React, { useState, useEffect, useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../CartIcon";
import CartContext from "../../../Store/CartContext";

const HeaderCartButton = () => {

    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);


    const cartCTX = useContext(CartContext);

    const numberOfCartItem = cartCTX.items.reduce((currNumber, item) => {
        return (currNumber + item.quantity)
    }, 0)


    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

    useEffect(() => {
        if (cartCTX.items.length === 0) {
            return;
        }
        const timer = setBtnIsHighLighted(true);

        setTimeout(() => {
            setBtnIsHighLighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }

    }, [cartCTX.items])

    return (
        <button className={btnStyles} onClick={cartCTX.showCart}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >Cart</span>
            <span className={styles.badge}>
                {numberOfCartItem}
            </span>
        </button>
    )
}
export default HeaderCartButton;

