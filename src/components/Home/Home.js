import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Home = () => {

    const usersData = useUsers('https://jsonplaceholder.typicode.com/users')

    if (usersData.length) {
        usersData.length = 4;
    }
    console.log(usersData);
    
    return (
        <div style={{backgroundColor: '#eff0f3'}} className='container text-center'>
            <h1 className='py-2'>Users : {usersData.length} </h1>
            <div className="row">
                {
                    usersData?.map(user => <SingleUsers
                    key={user.id}
                    user={user}
                    ></SingleUsers>)
                }
            </div>
            <Link to='/users' className='btn btn-primary mb-5'>Load more</Link>
        </div>
    );
};

export default Home;