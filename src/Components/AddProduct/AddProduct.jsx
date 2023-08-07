import React, { useState } from 'react'
import "./AddProduct.css"
import { useDispatch } from "react-redux";
import { postApi } from '../../redux/action';


function AddProduct() {
    const [objData, setObjData] = useState({})
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postApi(objData))
    }


    const handleChange = (e) => {
        const { value, name } = e.target;
        setObjData({ ...objData, [name]: value })
    }

    return (
        <center>
            <form className='addProductMainContainer' onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' onChange={handleChange} required />
                <input type="text" name='description' placeholder='Enter Description' onChange={handleChange} required />


                <select name="category" placeholder='Select Category' onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                </select>

                <input type="text" name='image' placeholder='Enter Image Url' onChange={handleChange} required />
                <input type="text" name='location' placeholder='Enter Location' onChange={handleChange} required />
                <input type="date" name='postedAt' placeholder='Select Date' onChange={handleChange} required />
                <input type="number" name='price' placeholder='Enter Price' onChange={handleChange} required />

                <input type="submit" />
            </form>

        </center>
    )
}

export default AddProduct