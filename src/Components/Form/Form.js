import React, { useState } from "react";
import styles from "./Form.module.css"
import DisplayItem from "../Display/DisplayItem";
import Input from "../UI/Input/Input";
;

const initialItem = {
    candyName: "",
    description: "",
    price: "",
}

const Form = () => {

    const [item, setItem] = useState(initialItem);
    const [formData, setFormData] = useState([])

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setItem((prevItem) => {
            return { ...prevItem, [name]: value }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Show alert the enter all filled is required
        if (!(item.candyName.trim() && item.description.trim() && item.price.trim())) {

        }

        //Add new item into formData after click on "Add Product" button
        else {
            setFormData((prevFormData) => {
                return ([...prevFormData, { id: new Date().getTime().toString(), ...item }]);
            });
        }

        setItem(initialItem);
    }

    return (
        <>
            <div className={styles.formDiv}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <Input label="Candy Name" type="text" name="candyName" value={item.candyName} onChange={handleChange} placeholder="Enter candy name" />
                    <Input label="Description" type="text" name="description" value={item.description} onChange={handleChange} placeholder="Description of candy" />
                    <Input label="Price" type="number" name="price" value={item.price} onChange={handleChange} placeholder="Enter Price" />
                    {/* <Input label="Available Quntity : " type="number" name="availableQuantity" value={item.availableQuantity} onChange={handleChange} placeholder="Enter available quantity size wise T-Shirt Price" /> */}
                    <div>
                        <button className="add-product" type='submit'>Add Product</button>
                    </div>
                </form >
            </div >
            <div><hr className={styles.hr} /></div>
            <h2 className={styles.product}>PORDUCTS</h2>
            <div>
                <DisplayItem formData={formData} />
            </div>
        </>
    )
}
export default Form;