import React, {useState, useEffect, useContext, Component} from 'react';
import Img from 'react-image'
import {useParams} from 'react-router-dom'
import { CircleLoading } from 'react-loadingg';

const Person = () => {
    const id = useParams().id
    const [hasError, setErrors] = useState(false);
    const [person, setPerson] = useState(undefined);
    const [isLoading, setLoading] = useState(true)
  
    async function fetchData() {
      const res = await fetch("http://localhost:7294/Umbraco/Api/People/GetPersonById?id=" + id);
      res
        .json()
        .then(res => {
          setPerson(res)
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
          <Img src={person.ImageUrl}/>
        </div>
        
        <div className="col-md-6" style={{marginTop: "30px"}}>
          <h1>{person.Name}</h1>
          <h5>Email: {person.Email}</h5>
          <hr/>
          <p>Instagram: {person.Instagram_username}</p>
          <hr/>
          <p>Facebook: {person.Facebook_username}</p>
          <hr/>
          <p>Twitter: {person.Twitter_username}</p>
          <hr/>
          <p>LinkedIn: {person.LinkedIn_username}</p>
          <hr/>
        </div>
      </div>
    );

}

export default Person;