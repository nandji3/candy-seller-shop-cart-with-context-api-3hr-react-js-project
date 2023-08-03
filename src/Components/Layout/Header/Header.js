import React, { Fragment } from 'react'
import styles from "./Header.module.css"
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Candy Seller's Shop</h1>
                <HeaderCartButton />
            </header>
        </Fragment>
    )
}
export default Header
