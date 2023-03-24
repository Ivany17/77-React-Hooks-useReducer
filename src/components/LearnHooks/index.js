import React, { useState, useEffect } from 'react';

const LearnHooks = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(10);
    const handlerStep = ({target:{value}}) => {setStep(Number(value))}

    useEffect(() => {
        const handlerClick = () => {
            setCount(prevCount => prevCount+step);
        }
        document.body.addEventListener('click', handlerClick);
        return () => {
            document.body.removeEventListener('click', handlerClick); 
        }
    }, [step])
    
    return (
        <div>
            <p>count:{count}</p>
            <input type='number' value={step} onChange={handlerStep} />
        </div>
    );
}

export default LearnHooks;
