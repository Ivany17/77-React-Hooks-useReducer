import React, {useContext} from 'react';
import { UserContext } from '../../context';

const UserProfile = () => {
    const value = useContext(UserContext);
    return (
        <div>
            <h2>User Profile</h2>
            <p>{value.name}</p>
        </div>
    );
}

export default UserProfile;
