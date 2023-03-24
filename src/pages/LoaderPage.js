import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import DataLoader from '../components/DataLoader';
import NameList from '../components/NameList';
import PhoneList from '../components/PhoneList';

function LoaderPage() {
    const loadUsers = () => {
        return fetch('/users.json').then((response) => response.json())
    }
    const loadPhones = () => {
        return fetch('/phone.json').then((response) => response.json())
    }

    const renderUsers = (state) => {
        return (
            <ol>
                {users.map((user) => (<li key={user.id}>{user.name}</li>))}
            </ol>
        )
    }
    const renderPhones = (state) => {
        return (
            <ol>
                {users.map((phone) => (<li key={phone.id}>{phone.name} {phone.price}</li>))}
            </ol>
        )
    }

    return (
        <div>
            <h1>Loadboards</h1>
            <NameList />
            <PhoneList />
            <DataLoader loadData={loadUsers}>{renderUsers}</DataLoader>
            <DataLoader loadData={loadPhones} children>{renderPhones}</DataLoader>
            <Outlet />
            <Link to="/">Home</Link>
        </div>
    )
}

export default LoaderPage;