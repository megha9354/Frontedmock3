import React, { useEffect, useState } from 'react'
import "./GetProduct.css";
import axios from "axios"

function GetProduct() {

    const [productData, setProductData] = useState([])


    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        axios.get("http://localhost:3001/products")
            .then(({ data }) => {
                setProductData(data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    return (
        <div>
            {productData.map((elem) => {
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
            })}

        </div>
    )
}

export default GetProduct;