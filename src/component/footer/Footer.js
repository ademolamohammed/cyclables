import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#039B00', height: '300px', color: 'white'}}>
            <div className={classes.div}>
                <div>
                    <h4>E-Cycleables.</h4>
                    <p className={classes.para}>E-Cycleables.10.2021@gmail.com</p>
                    <h5>Address</h5>
                    <p className={classes.para}>Lekki Phrase 1, Lagos State, Nigeria</p>
                </div>

                <div>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Team</th>
                            <th>Socials</th>
                            <th>Legal</th>
                        </tr>
                        <tr>
                            <td>Waste Removal</td>
                            <td>About Us</td>
                            <td>Twitter</td>
                            <td>Terms</td>
                        </tr>
                        <tr>
                            <td>Reusable Assets</td>
                            <td>Contact Us</td>
                            <td>LinkedIn</td>
                            <td>Privacy</td>
                        </tr>
                        <tr>
                            <td>Junk Disposals</td>
                            <td>FAQs</td>
                            <td>Facebook</td>
                            <td>Cookies</td>
                        </tr>
                        <tr>
                            <td>Renovation</td>
                            <td>Blog</td>
                            <td>Instagram</td>
                            <td>Licenses</td>
                        </tr>
                    </table>
                </div>
            </div>
            <hr style={{marginTop: '25px', width: '750px'}}/>
            <center>
                <p style={{color: 'white'}}>© 2023 <b>E-Cycleables.</b> All rights reserved.</p>
            </center>
        </div>
    );
};

export default Footer;