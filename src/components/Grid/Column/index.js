import React from 'react';
import styles from './column.module.scss'

const Column = (props) => {
    const {children, colNum} = props;
    return (
        <div className={styles[`col-${colNum}`]}>
            {children}
        </div>
    );
}

export default Column;