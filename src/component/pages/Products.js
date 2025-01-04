import React from 'react';
import classes from './Products.module.css';
import prod from '../images/prod.png';
import delivery from '../images/delivery.png';
import part from '../images/part.png';

const Products = () => {
    return (
        <div>
            <center>
                <div className={classes.imageContainer}>
                    <img src={prod} alt='product' className={classes.back} />
                    <img src={delivery} alt="Middle Layer" className={classes.middle} />
                    <img src={part} alt="Foreground" className={classes.fore} />
                </div>
            </center>
        </div>
    );
};

export default Products;