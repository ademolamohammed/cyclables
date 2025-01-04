import React from 'react';
import classes from './Banner.module.css';

const Banner = (props) => {
    return (
        <div>
            <button className={classes.button}>
                {props.name}
            </button>
        </div>
    );
};

export default Banner;