import React from 'react';
import { Link } from 'react-router-dom';

const SingleUsers = ({ user, children }) => {
    const { id, name, email, phone, address, website } = user || {};
    console.log(children);
    const { company, companyName } = children || {};
    console.log(company);

    return (
        <div className='col-4 gy-4'>
            <div className='card shadow-lg p-3 mb-5 bg-body rounded border-0'>
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>Email : {email}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>City : {address?.city}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>Street : {address?.street}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>Phone : {phone}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>Website : {website}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>Company : {company}</h6>
                    <h6 className='card-subtitle mb-2 text-muted'>Company Name : {companyName}</h6>
                    <Link to={`/user/${id}`} className='card-link btn btn-danger mt-2'>More Info</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleUsers;