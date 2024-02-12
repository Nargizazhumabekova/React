import React from 'react';
import classes from "./Images.module.css";

const Images = ({img}) => {
    return (
        <div className={classes.img}>
            <img src={img} alt="23fef"/>
        </div>
    );
};

export default Images;