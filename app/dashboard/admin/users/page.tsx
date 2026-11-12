import React from 'react';
import { getUsers } from '@/lib/api/user';

const AdminUsersPage = async () => {

    const users = await getUsers();
    console.log('users', users);
    
    return (
        <div>
            
        </div>
    );
};

export default AdminUsersPage;