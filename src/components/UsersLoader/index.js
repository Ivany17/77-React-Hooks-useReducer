import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../../api';
import Spinner from '../Spinner';
import config from '../../config';


class UsersLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            isFetching: false,
            isError: false,
            currentPage: 1,
            currentResults: String(config.DEFAULT_AMOUNT),
            currentNat: 'gb'
        }
    }

    load = () => {
        const {currentPage, currentResults, currentNat} = this.state;
        getUsers({page:currentPage, results:currentResults, nat:currentNat})
        .then((data) => {
            return(data.error) ? this.setState({isError: true}) : this.setState({users:data.results});
        })
        .catch(() => this.setState({
            isError: true,
        }))
        .finally(() => this.setState({
            isFetching: false,
        }))
    }

    componentDidMount(){
        this.setState({
            isFetching: true,
        })
        this.load();
    }

    componentDidUpdate(prevProps, prevState){
        const {currentPage, currentResults, currentNat} = this.state;
        const isUpdate = currentPage !== prevState.currentPage || currentResults !== prevState.currentResults || currentNat !== prevState.currentNat
        if(isUpdate){
            this.load();
        }
    }

    prevPage = () => {
        if(this.state.currentPage>1){
            this.setState((state, props) =>  ({currentPage:state.currentPage - 1}));
        }
    };
    nextPage = () => this.setState((state, props) => ({currentPage:state.currentPage + 1}));
    
    createUser = (user) => {
        // <li key={user.login.uuid}>{JSON.stringify(user, null, 7)}</li>
        <li key={user.login.uuid}>{user.name.first}({user.nat})</li>
    }

    radioHandler = (event) => {
        this.setState({currentResults:event.target.value})
    }

    selectHandler = (event) => {
        this.setState({currentNat:event.target.value})
    }
    
    render() {
        const {users, isFetching, isError, currentPage, currentResults, currentNat} = this.state;
        return <div>
            {isFetching && <div><Spinner  /></div>}
            {isError && <div>Error</div>}
            
            <h2>Users list</h2>
            <button onClick={this.prevPage}>&lt;</button>
            <button onClick={this.nextPage}>&gt;</button>
            <p>current page: {currentPage}</p>
            <div>
                <label>
                    <input onChange={this.radioHandler} 
                    type='radio' name='results' value={5} checked={currentResults === '5'} /> 5
                </label>
                <label>
                    <input onChange={this.radioHandler} 
                    type='radio' name='results' value={10} checked={currentResults === '10'} /> 10
                </label>
                <label>
                    <input onChange={this.radioHandler} 
                    type='radio' name='results' value={15} checked={currentResults === '15'} /> 15
                </label>              
            </div>
            <ul>
                {users.map(this.createUser)}
            </ul>
            <select value={currentNat} onChange={this.selectHandler}>
                <option value="br">BR</option>
                <option value="us">US</option>
                <option value="fr">FR</option>
                <option value="gb">GB</option>
            </select>
        </div>
    }
}

UsersLoader.propTypes = {};

export default UsersLoader;
