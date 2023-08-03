import React, { useContext } from "react";
import "./DisplayItem.module.css"
import styles from "../Form/Form.module.css"
import CartContext from "../../Store/CartContext";

const DisplayItem = ({ formData }) => {

    const cartCTX = useContext(CartContext)

    const addToCartHandler = (item) => {
        cartCTX.addItem(item);
    }

    return (
        <div>
            <hr className={styles.hr} />
            <div className="table-responsive mx-4 table-bordered">
                <table className="table align-middle table-bordered text-center ">
                    <thead className="fw-bold">
                        <tr>
                            <td >Candy Name</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td colSpan="3">Action</td>
                        </tr>
                    </thead>
                    <tbody className="fw-normal">
                        {formData.map((ele) => {
                            return (
                                <tr key={ele.id} id={ele.id}>
                                    <td>{ele.candyName}</td>
                                    <td>{ele.description}</td>
                                    <td>{ele.price}</td>
                                    <td>&nbsp;&nbsp;<button className="btn btn-danger btn-sm" onClick={() => addToCartHandler({
                                        id: ele.id,
                                        candyName: ele.candyName,
                                        price: ele.price,
                                        quantity: 1,
                                    })}>Buy One</button></td>
                                    <td>&nbsp;&nbsp;<button className="btn btn-danger btn-sm" onClick={() => addToCartHandler({
                                        id: ele.id,
                                        candyName: ele.candyName,
                                        price: ele.price,
                                        quantity: 2,
                                    })}>Buy Two</button></td>
                                    <td>&nbsp;&nbsp;<button className="btn btn-danger btn-sm" onClick={() => addToCartHandler({
                                        id: ele.id,
                                        candyName: ele.candyName,
                                        price: ele.price,
                                        quantity: 3,
                                    })}>Buy Three</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table >
            </div>
        </div >
    )
}
export default DisplayItem;
