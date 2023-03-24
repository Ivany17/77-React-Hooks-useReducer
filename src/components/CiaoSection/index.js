import {Component} from "react";
import CiaoList from "./CiaoList";

class CiaoSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            isStraight:true,
            users: [
                {
                id:1,
                firstName:'Elon'
                },
                {
                id:2,
                firstName:'Nazar'
                },
                {
                id:3,
                firstName:'Ann'
                }
            ]
        }
        sortUsers = () => {
          const {users, isStraight} = this.state;
          const sortUsers = JSON.parse(JSON.stringify(users));
          //const sortUsers = [...users];
          sortUsers.sort((prev, next) => isStraight ? next.id - prev.id : prev.id - next.id);
          this.setState({
            isStraight:isStraight,
            users:sortUsers
          })
        }
        sortUsersAlpha = () => {
            const {users, isAlphabet} = this.state;
            const sortUsersName = JSON.parse(JSON.stringify(users));
            sortUsersName.sort((a, b) => {
                if (a.firstName > b.firstName) {
                    return isAlphabet ? -1 : 1;
                }
                if (a.firstName < b.firstName) {
                    return isAlphabet ? 1 : -1;
                }
                return 0;
            });
            this.setState({
                isAlphabet:isAlphabet,
                users:sortUsersName
            })
        }
    }
    
    render(){
    const {users, isStraight, isAlphabet} = this.state;
    return <>
    <p>
    <button onClick={this.sortUsers}>SORT BY NUMBER{isStraight ? 'straight' : 'reverse'}</button>
    <button onClick={this.sortUsersAlpha}>SORT BY NAME{isAlphabet ? 'straight' : 'reverse'}</button>
    </p>
        <CiaoList users={users} />
    </>
    }
}

export default CiaoSection;