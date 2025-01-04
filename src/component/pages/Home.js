import React from 'react';
import classes from './Home.module.css';
import Image1 from '../images/Image1.jpg';
import Banner from '../banner/Banner';


const Home = () => {
    const name = "Join us now";
    const word = "See how it works";

    return (
        <div>
            <div className={classes.textBackground}>
                <div className={classes.box}>
                    <h1 style={{fontSize: '40px', marginTop: '0'}}>Junk Removal Solutions Clear the Clutter, Reclaim Your Space</h1>
                    <p style={{color: 'white', fontSize: '15px'}}>We specialize in fast, reliable junk removal services designed to make your life easier. Whether you're dealing with old furniture, broken appliances, yard waste.</p>

                    <div style={{display: 'flex', gap: '10px', marginTop: '30px', justifyContent: 'center'}}>
                        <Banner name={name} />
                        <Banner name={word} />
                    </div>
                </div>
            </div>

            <div className={classes.Image}>
                <img src={Image1} width="320px" height="340px" alt='img'/>

                <div className={classes.reason}>
                    <h2>Why Choose E-Cycleables ?</h2>
                    <p>Are u tired of looking at piles of unwanted items cluttering your home or office? Our expert team at [Company Name] is here to help! We specialize in fast, reliable junk removal services designed to make your life easier. Whether you are dealing with old furniture, broken appliances, yard waste, or construction debris, we handle it all with care and efficiency.</p>
                </div>
            </div>
            
            <center>
                <div className={classes.Offer}>
                    <center>
                        <button className={classes.weOffer}>What we Offer?</button>
                        <h2>What makes us stand out from others?</h2>
                    </center>
                </div>
            </center>

        </div>
    );
};

export default Home;