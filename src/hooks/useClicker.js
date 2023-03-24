import { useState, useEffect } from 'react';

const UseClicker = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const handlerClick = () => {setCount(count => count+1)}
        window.addEventListener('click', handlerClick);
        return () => {window.removeEventListener('click', handlerClick)};
    }, [])
    return count;
}

export default UseClicker;
