import React, { useState } from "react";
import styles from "./Form.module.css"
import DisplayItem from "../Display/DisplayItem";
import Input from "../UI/Input/Input";
import { useEffect } from "react";


const getLatestFormDataFetchedFromLocalStorage = () => {
    let listOfArrayObjectOfFormData = JSON.parse(localStorage.getItem("data"));

    if (listOfArrayObjectOfFormData) {
        return listOfArrayObjectOfFormData;
    }
    else {
        return [];
    }
}

const Form = () => {

    const initialItem = {
        candyName: "",
        description: "",
        price: "",
    }

    const [item, setItem] = useState(initialItem);
    const [formData, setFormData] = useState(getLatestFormDataFetchedFromLocalStorage())

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(formData));
    }, [formData])

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
        setItem(initialItem);  //RESET From after submit data
    }

    return (
        <>
            <div className={styles.formDiv}>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <Input label="Candy Name" type="text" name="candyName" value={item.candyName} onChange={handleChange} placeholder="Enter candy name" />
                    <Input label="Description" type="text" name="description" value={item.description} onChange={handleChange} placeholder="Description of candy" />
                    <Input label="Price" type="number" name="price" value={item.price} onChange={handleChange} placeholder="Enter Price" />
                    <div>
                        <button className="add-product" type='submit'>Add Product</button>
                    </div>
                </form >
            </div >
            <div><hr className={styles.hr} /></div>
            <h2 className={styles.product}>PRODUCTS</h2>
            <div>
                <DisplayItem formData={formData} />
            </div>
        </>
    )
}
export default Form;