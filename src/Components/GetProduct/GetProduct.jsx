import React, { useEffect, useState } from 'react'
import "./GetProduct.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchApi, sortAPI } from '../../redux/action';


function GetProduct() {
    const { data, loading } = useSelector((store) => store);
    const dispatch = useDispatch();
    const [paramsObj, setPramsObj] = useState({})

    useEffect(() => {
        dispatch(fetchApi());
    }, [])


    const handleChange = (e) => {
        const { value, name } = e.target;
        setPramsObj({ ...paramsObj, [name]: value })
    }

    const handleSort = () => {
        dispatch(sortAPI(paramsObj));
    }

    return (
        <>

            <div>
                <select name="category" placeholder='Select Category' onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="clothing">Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                </select>


                <select name="sort" onChange={handleChange} >
                    <option value="">Sort By Date</option>
                    <option value="asc">Asceding</option>
                    <option value="desc">Desceding</option>
                </select>

                <input type="text" placeholder='Select By Product' name='name' onChange={handleChange} />

                <div onClick={handleSort}>Filter</div>
            </div>




            <div>
                {loading ? "Loading..." :
                    data.length === 0 ?
                        "No Data Found" :
                        data.map((elem) => {
                            return (
                                <div key={elem.id} className='mainContainer'>
                                    <div className='imgContainer'>
                                        <img src={elem.img} alt="product_img" />
                                    </div>
                                    <div className='Title'> {elem.name}</div>
                                    <div className='title'>{elem.category}</div>
                                    <div className='title'>{elem.description} </div>
                                    <div className='title'>Location : {elem.location}</div>
                                    <div className='title'>Posted On : {elem.postedAt}</div>
                                    <div className='Title'>Rs . {elem.price} /-</div>
                                    <button>Buy</button>

                                </div>
                            )
                        })
                }

            </div>

        </>
    )
}

export default GetProduct;


