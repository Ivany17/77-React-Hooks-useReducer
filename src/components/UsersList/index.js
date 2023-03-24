import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserCard, {userPropTypes} from '../UserCard';

class UsersList extends Component {

    userSelector = (id) => {
        const {users, setUserSelector} = this.props;
        setUserSelector(
            newUsers.map((user) => ({...user, isSelected: user.id === id ? !user.isSelected : user.isSelected
            }))
        )
    }
    mapUsers = (user) => {return (
        <UserCard key={user.id} user={user} userSelector={this.userSelector}/>
    )}
    render() {
        const {users} = this.props;
        return (
            <section>
                <h1>List of users:</h1>
                {users.map(this.mapUsers)}
            </section>
        );
    }
}

UsersList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape(userPropTypes).isRequired).isRequired,
}

export default UsersList;
