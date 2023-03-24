import React from 'react';

const FlexContainer = (props) => {
    const {children, style, jc, ai, fd, fw, ...restProps} = props;
    const inlineStyle = {
        ...style,
        display: 'flex',
        justifyContent: jc,
        alignItems: ai,
        flexDirection: fd,
        flexWrap: fw
    }
    return (
        <div style={inlineStyle} {...restProps}>
            {children}
        </div>
    );
}

export default FlexContainer;
