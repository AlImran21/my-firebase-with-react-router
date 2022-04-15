import React from 'react';
import useUsers from '../../Hooks/useUsers';
import SingleUsers from '../SingleUsers/SingleUsers';

const Users = () => {
    const allUsers = useUsers('https://jsonplaceholder.typicode.com/users')

    return (
        <div style={{ backgroundColor: '#eff0f3' }} className='container text-center'>
            <h1 className='py-2'>Users : {allUsers.length} </h1>
            <div className="row">
                {
                    allUsers?.map(user => <SingleUsers
                        key={user.id}
                        user={user}
                    ></SingleUsers>)
                }
            </div>
        </div>
    );
};

export default Users;