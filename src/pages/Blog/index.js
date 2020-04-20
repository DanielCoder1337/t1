import React, {useState, useEffect, useContext, Component} from 'react';
import Img from 'react-image'
import formatUrl from '../formatUrl'
import { CircleLoading } from 'react-loadingg';

const Blogs = () => {
    const [hasError, setErrors] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setLoading] = useState(true)

    async function fetchData() {
      const res = await fetch("http://localhost:7294/Umbraco/Api/Blog/GetAllBlogs");
      res
        .json()
        .then(res => {
          setBlogs(res)
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
    <div className="row">
        {blogs.map(item => (
        <div className="col-md-6" style={{marginBottom: "10px"}} key={item.Id}>
            <div className="card mb-6 box-shadow">
                <div className="card-body">
                  <h5>{item.Title}</h5>
                  <p>{item.Excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href={formatUrl("/blog/", item.Id)} type="button" className="btn btn-sm btn-outline-secondary">View</a>
                    </div>
                    <small className="text-muted">Minutes ago...</small>
                  </div>
                </div>
            </div>
        </div>
        ))}
    </div>
    );
}

export default Blogs;