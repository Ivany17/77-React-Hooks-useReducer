import React, { useState, useEffect } from 'react';
import { getUsersJSON } from 'api';
import { useData } from 'hooks';

const FuncNameList = (props) => {
    const {
        data: users,
        error,
        isFetching
    } = useData(getUsersJSON);

        if(isFetching){
        return (
            <p>Loading</p>
        )
    }
    if(error){
        return (
            <p>{error}</p>
        )
    }

    return (
        <ol>
            {users.map((user) => (<li key={user.id}>{user.name}</li>))}
        </ol>
    );
}


export default FuncNameList;