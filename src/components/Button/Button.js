import React from 'react';

// import classes from './Button.module.css';

const button = (props) => (
    <button onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;


//  className={[classes.Button, classes[props.btnType]].join(' ')}
         