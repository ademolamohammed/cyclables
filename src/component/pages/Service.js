import React from 'react';
import classes from './Service.module.css';
import services from '../images/services.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

const Service = () => {
    return (
        <div>
            <center>
                <h5>Our services</h5>

                <div style={{width: '550px', marginBottom: '40px'}}>
                    <h3>At E-Cycleables we offer a range of junk removal services tailored to meet your needs.</h3>
                </div>

                <img src={services} width="730px" height="350px" alt='service'/>
            </center>

            <div className={classes.Who}>
                <h4>Who are we?</h4>
                <p>From old furniture to unwanted appliances, we help you declutter your home quickly and responsibly. Our team ensures that all items are removed safely and disposed of in an eco-friendly manner.</p>
                <p>Efficient and discreet junk removal for offices, retail spaces and other commercial properties. We handle everything from office furniture to electronics, ensuring minimal disruption of your business operations.</p>
            </div>

            <div className={classes.Image}>
                <img src={image4} width="400px" height="300px" alt='Residential Junk Removal' />

                <div className={classes.reason}>
                    <h2>Residential Junk Removal</h2>
                    <p>Residential Junk Removal Description: From old furniture to unwanted appliances, we help you declutter your home quickly and responsibly. Our team ensures that all items are removed safely and disposed of in an eco-friendly manner.</p>
                </div>
            </div>

            <div className={classes.img6}>
                <div className={classes.reason}>
                    <h2>Commercial Junk Removal</h2>
                    <p>Efficient and discreet junk removal for offices, retail spaces and other commercial properties. We handle everything from office furniture to electronics, ensuring minimal disruption of your business operations.</p>
                </div>

                <img src={image5} width="400px" height="300px" alt='Commercial Junk Removeal' />
            </div>
            
            <div className={classes.Image}>
                <img src={image6} width="400px" height="320px" alt='Construction Debris Removal' />

                <div className={classes.reason}>
                    <h2>Construction Debris Removal</h2>
                    <p>Safe and thorough removal of construction and renovation debris, keeping your project site clean and safe. We handle materials like wood, concrete and metal ensuring proper disposal and recycling.</p>
                </div>
            </div>
        </div>
    );
};

export default Service;