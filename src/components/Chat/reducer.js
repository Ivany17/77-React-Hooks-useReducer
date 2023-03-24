const reducer = (state, action) => {
    const {type, data:{authors, messages}} = action;
    switch(type) {
        case 'DATA_RESPONSE_SUCCESS':{
            const authorsMap = new Map();
            authors.forEach(author => authorsMap.set(author.id, author));
            const messagesWithAuthors = messages.map(message => {
                const messagesWithAuthors = {
                    ...message,
                    author: authorsMap.get(message.authorId)
                }
                return messagesWithAuthors;
            });
            const newState = {
                ...state,
                authors,
                messages: messagesWithAuthors
            }
            return newState;
        }
        case 'DATA_RESPONSE_ERROR':{}
        default:
            return state;
    }
}

export default reducer;