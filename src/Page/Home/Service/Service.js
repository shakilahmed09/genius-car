import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service

    const navigate = useNavigate()
    const navigateServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p><strong>Price: {price}</strong></p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateServiceDetail(id)} className='btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;