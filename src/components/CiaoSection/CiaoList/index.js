import React from "react";
import PropTypes from 'prop-types';
import Ciao from "../Ciao";

const CiaoList = (props) => {
    const {users} = props;
    const mapUsersCiao = ({id, firstName}) =><Ciao key={id} id={id} name={firstName} />;
    return <div>
        {users.map(mapUsersCiao)}
    </div>;
}

const userProps = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

const userPropsShape = PropTypes.shape(userProps).isRequired;

CiaoList.propTypes = {
    users:PropTypes.arrayOf(userPropsShape).isRequired,
}

export default CiaoList;