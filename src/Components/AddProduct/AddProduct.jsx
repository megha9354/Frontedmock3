import React, { useState } from 'react'
import "./AddProduct.css"
import axios from "axios";

function AddProduct() {
    const [objData, setObjData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/products", objData)
            .then(({ data }) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    const handleChange = (e) => {
        const { value, name } = e.target;

        setObjData({ ...objData, [name]: value })
    }

    return (
        <center>
            <form className='addProductMainContainer' onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' onChange={handleChange} />
                <input type="text" name='description' placeholder='Enter Description' onChange={handleChange} />


                <select name="category" placeholder='Select Category' onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                </select>

                <input type="text" name='image' placeholder='Enter Image Url' onChange={handleChange} />
                <input type="text" name='location' placeholder='Enter Location' onChange={handleChange} />
                <input type="date" name='postedAt' placeholder='Select Date' onChange={handleChange} />
                <input type="number" name='price' placeholder='Enter Price' onChange={handleChange} />

                <input type="submit" />
            </form>

        </center>
    )
}

export default AddProduct