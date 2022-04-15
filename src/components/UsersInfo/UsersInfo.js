import React from 'react';
import { useParams } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const UsersInfo = () => {
    let {userId} = useParams();
    console.log(userId);
    const allUsers = useUsers(`https://jsonplaceholder.typicode.com/users?id=${userId}`)

    console.log(allUsers[0]);

    return (
        <div className='container text-center'>
            <h1>{userId}</h1>
            <SingleUsers user={allUsers[0]}>
                {
                    {company:allUsers[0]?.company?.bs, companyName:allUsers[0]?.company?.name}
                    
                }
            </SingleUsers>
        </div>
    );
};

export default UsersInfo;