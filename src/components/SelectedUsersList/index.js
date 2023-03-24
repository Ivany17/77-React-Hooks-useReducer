import React from 'react';

const SelectedUsersList = (props) => {
    const {users} = props;
    const selectedUsers = users.filter((user) => user.isSelected);
    return (
        <div>
            {selectedUsers.map(({id, firstName}) => {
                return <span key={id}>{firstName}</span>
            })}
        </div>
    );
}

export default SelectedUsersList;
