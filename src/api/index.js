import queryString from 'query-string';
import config from '../config';
/**
 * 
 * @param {*} options
 * @param {number} options.page 
 * @param {number} options.results 
 * @param {string} options.format 
 * @param {string} options.seed 
 * @param {string} options.nat 
 * @param {string} options.inc 
 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
    const defaultOptions = {
        page: 1,
        results: config.DEFAULT_AMOUNT,
        format: config.DEFAULT_FORMAT,
        seed: config.API_KEY,
        nat: 'gb',
        inc: 'gender, name, login, nat'
    };
    const finalOptions = {
        ...defaultOptions,
        ...options
    };
    const query = queryString.stringify(finalOptions);
    return fetch(`${config.BASE_URL}?${query}`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export const getUsersJSON = () => {
    return fetch('/users.json')
    .then((response) => response.json())
}

export const getChat = () => {
    return fetch('/chat.json')
    .then((response) => response.json())
}