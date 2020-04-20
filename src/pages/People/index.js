import React, {useState, useEffect, useContext, Component} from 'react';
import Img from 'react-image'
import formatUrl from '../formatUrl'
import { CircleLoading } from 'react-loadingg';

const People = () => {
    const [hasError, setErrors] = useState(false);
    const [people, setPeople] = useState([]);
    const [isLoading, setLoading] = useState(true)

    async function fetchData() {
      const res = await fetch("http://localhost:7294/Umbraco/Api/People/GetAllPeople");
      res
        .json()
        .then(res => {
          setPeople(res)
          setLoading(false)
        })
        .catch(err => setErrors(err));
    }
    useEffect(() => {
      fetchData();
    },[]);
    if (hasError) return (<h1>ERROR</h1>)
    else if (isLoading) return (<CircleLoading/>)
    else {
        return (
        <div className="row">
            {people.map(item => (
            <div className="col-md-4" key={item.Name}>
                <div className="card mb-4 box-shadow">
                    <Img src={item.ImageUrl} />
                    <div className="card-body">
                        <h5>{item.Name}</h5>
                        <p className="card-text cardStyle">{item.Email} </p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <a href={formatUrl("/people/", item.Id)} type="button" className="btn btn-sm btn-outline-secondary">View</a>
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

}

export default People;