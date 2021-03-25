import React from 'react';
import '../App.css';
import '../static/css/Footer.css'
import MERN from '../static/img/MERN-logo.png'; 


const Footer = props => {



    return(
        <>
        <aside class = 'footer_aside'>
            <p>ksanmartin909@gmail.com</p>
            <p>© 2021 Kristen San Martin</p>
        </aside>
        <div id = 'footer_wrapper' class= 'flex'>
            <section class='footer_tech'>
                <h5>Technologies</h5>
                <div class= 'tech_list flex'>
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>AdobeXD</p>
                    <p>Postman</p>
                    <p>Github</p>
                </div>    
            </section>

            <img class='footer_image' src ={MERN} alt= 'mern logo' /> 

            <section class='footer_icons'>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin"></i>
            </section>
        </div>
    </>
    )

}
export default Footer;