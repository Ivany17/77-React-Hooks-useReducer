import React from 'react';
import cx from 'classnames';
import Parent from './Parent';
import { ThemeContext } from '../../context';
import styles from './Tree.module.scss';
import CONSTANTS from '../../constants';
import { WithTheme } from '../HOCs';
const {THEMES} = CONSTANTS;

const Tree = (props) => {
    const {theme, setTheme} = props;
    const classNames = cx(styles.container, {
        [styles.light] : theme === THEMES.LIGHT,
        [styles.dark] : theme === THEMES.DARK,
    });
    return (
        <div className={classNames}>
            <h2>Tree</h2>
            <Parent />
        </div>
    );
}

const TreeWithTheme = WithTheme(Tree);

export default TreeWithTheme;
