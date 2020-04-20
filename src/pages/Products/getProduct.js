import React, {useState, useEffect, useContext, Component} from 'react';
import Img from 'react-image'
import {useParams} from 'react-router-dom'
import { CircleLoading } from 'react-loadingg';

const Product = () => {
    const id = useParams().id
    const [hasError, setErrors] = useState(false);
    const [product, setProduct] = useState(undefined);
    const [isLoading, setLoading] = useState(true)
  
    async function fetchData() {
      const res = await fetch("http://localhost:7294/Umbraco/Api/Products/GetProductById?id=" + id);
      res
        .json()
        .then(res => {
          setProduct(res)
          setLoading(false)
        })
        .catch(err => setErrors(err));
    }

    useEffect(() => {
      fetchData();
    },[]);

    if (isLoading) return (<CircleLoading/>)
    else return (
      
      <div className="row">
        <div className="col-md-6">
          <Img src={product.ImageUrl}/>
        </div>
        
        <div className="col-md-6" style={{marginTop: "30px"}}>
          <h1>{product.Name}</h1>
          <h4>€ {product.Price}</h4>
          <p>{product.Description}</p>
          <hr/>
          <button type="button" class="btn btn-secondary btn-lg float-right">Add to cart</button>
        </div>
      </div>
    );

}

export default Product;