import React from 'react';
import classes from "./Text.module.css";

const Text = ( {text} ) => {
    return (
        <div>
            <h1 className={classes.text} >{text}</h1>
        </div>
    );
};

export default Text;


