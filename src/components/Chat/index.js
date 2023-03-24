import React, { useEffect, useReducer } from 'react';
import { getChat } from 'api';
import reducer from './reducer';

const Chat = () => {
    const [state, dispatch] = useReducer(reducer, {
        authors:[],
        messages:[]
    });

    useEffect(() => {
        getChat()
        .then(data => dispatch({
            type:'DATA_RESPONSE_SUCCESS',
            data
        }))
        .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2>Chat</h2>
            {
                state.messages.map((message) => (
                    <article key={message.id}>
                        <h3>{message.author.name}</h3>
                        <p>{message.body}</p>
                    </article>

                ))
            }
        </div>
    );
}

export default Chat;
