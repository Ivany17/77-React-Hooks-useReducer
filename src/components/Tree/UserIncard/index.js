import React from 'react';
import styles from './UserIncard.module.scss';
import { UserContext } from '../../../context';

const UserIncard = () => {
    const renderProps = (userValueFromContext) => {
        return (
            <div className={styles.container}>
                <h2>UserIncard</h2>
                <p>{userValueFromContext.firstName} {userValueFromContext.lastName}</p>
                <img src={userValueFromContext.imgSrc} className={styles.img}/>
            </div>
        );
    }
    return <UserContext.Consumer>{renderProps}</UserContext.Consumer>
}

export default UserIncard;
