import React, {useState, useEffect, useContext, Component} from 'react';
import Img from 'react-image'
import {useParams} from 'react-router-dom'
import { CircleLoading } from 'react-loadingg';

const Blog = () => {
    const id = useParams().id
    const [hasError, setErrors] = useState(false);
    const [blog, setBlog] = useState(undefined);
    const [isLoading, setLoading] = useState(true)
  
    async function fetchData() {
      const res = await fetch("http://localhost:7294/Umbraco/Api/Blog/GetBlogById?id="+id);
      res
        .json()
        .then(res => {
          setBlog(res)
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
        <div className="col-md-12">
          <h1>{blog.Name}</h1>
        </div>
      </div>
    );
}

export default Blog;