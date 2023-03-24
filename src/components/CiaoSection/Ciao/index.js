import { Component } from "react";
import PropTypes from 'prop-types';
import styles from './ciao.module.scss';
class Ciao extends Component{
    /**
     * 
     * @param {*} props 
     * @param {string} props.name
     * @param {number} props.id
     */
    constructor(props){
        super(props);
        this.state = {
            isGreeting:true
        }
    }
    handlerBtn = () => {
        const {isGreeting} = this.state;
        this.setState({
            isGreeting:isGreeting
        })
    }
    render(){
        const {name, id} = this.props;
        const {isGreeting} = this.state;
        if(isGreeting){
            return <>
            <h2 className={styles.container}>{id} Hi, {name}</h2>
            <button onClick={this.handlerBtn}>Ciao</button>
        </>
        }
        return <h2>Bye {name}!</h2>
    }
}
  
Ciao.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Ciao;