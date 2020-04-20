import React, {useState, useEffect, useContext, Component} from 'react';
import Img from 'react-image'
import formatUrl from '../formatUrl'
import { CircleLoading } from 'react-loadingg';

const Products = () => {
    const [hasError, setErrors] = useState(false);
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true)

    async function fetchData() {
      const res = await fetch("http://localhost:7294/Umbraco/Api/Products/GetAllProducts");
      res
        .json()
        .then(res => {
          setProducts(res)
          setLoading(false)
          console.log(JSON.stringify(res))
        })
        .catch(err => setErrors(err));
    }

    useEffect(() => {
      fetchData();
    },[]);

    if (isLoading) return (<CircleLoading/>)
    else return (
    <div>
      <h1 className="text-center" style={{color: "black"}}> Our amazing collection!</h1>
      <br/>
      <div className="row">
        {products.map(item => (
        <div className="col-md-4" key={item.Name}>
            <div className="card mb-4 box-shadow">
                <Img src={item.ImageUrl} />
                <div className="card-body">
                  <h5>{item.Name}</h5>
                  <p className="card-text cardStyle">{item.Description} </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href={formatUrl("/products/", item.Id)} type="button" className="btn btn-sm btn-outline-secondary">View</a>
                    </div>
                    <small className="text-muted">Minutes ago...</small>
                  </div>
                </div>
            </div>
        </div>
        ))}
      </div>
    </div>
    );
}

export default Products;