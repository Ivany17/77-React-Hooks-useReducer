import React from 'react';
import PropTypes from 'prop-types';

function UserCard() {
    const {user:{id, firstName, isSelected}, userSelector = () => {}} = props;
    const styles = {border: isSelected ? 'solid 3px pink' : undefined};
    return (
        <article style={styles}>
            <h2><span>{id}: </span>{firstName}</h2>
            <button onClick={this.btnHandler}>Select this user</button>
        </article>
    );
}

UserCard.defaultProps = {
    userSelector: () => {},
    user: {id:0, firstName:'Ivan', isSelected:true}
}

export const userPropTypes = {
    id:PropTypes.number.isRequired,
    firstName:PropTypes.string.isRequired,
    isSelected:PropTypes.bool,
}

UserCard.propTypes = {
    user:PropTypes.shape(userPropTypes).isRequired,
    userSelector:PropTypes.func
}

export default UserCard;
