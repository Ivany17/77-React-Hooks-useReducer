import React, { useContext, useState, useCallback, useEffect, useMemo } from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from '../constants';
import FuncNameList from 'components/FuncNameList';
const { THEMES } = CONSTANTS;
const styleMap = {
    [THEMES.LIGHT]:{
        background:'#eee',
        color:'#333',
        height:'100vh'
    },
    [THEMES.DARK]:{
        background:'#333',
        color:'#eee',
        height:'100vh'
    }
}

function calcValue(n) {
    let res = 0;
    for(let i=0; i<1000; i++){
        res += i;
    }
    return n**5;
}

const HomePage = () => {
    const [value, setValue] = useState(0);
    const [theme, themeState] = useContext(ThemeContext);
    const handlerLog = useCallback(
        () => {console.log(value)},
        [value]
    )
    const handlerTheme = useCallback(() => {
        themeState(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    }, [theme])
    const handlerInput = useCallback(({target:{value}}) => {
        setValue(Number(value));
    }, [])
    // useEffect(() => {console.log('create func')}, [handlerInput]);
    const showCalcValue = useMemo(() => calcValue(value), [value])
    return (
        <div style={styleMap[theme]}>
            <h2>Value: {showCalcValue}</h2>
            <input type='number' value={value} onChange={handlerInput} />
            <button onClick={handlerTheme}>Switch theme</button>
            <button onClick={handlerLog}>Log value</button>
            <UserProfile />
            <FuncNameList />
        </div>
    );
}

export default HomePage;
