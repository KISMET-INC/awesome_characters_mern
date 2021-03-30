import React from 'react';
import '../App.css';
import '../static/css/Footer.css'
import MERN from '../static/img/MERN-logo.png'; 


const Footer = props => {



    return(
        <footer>
        <aside className = 'footer_aside'>
            <p>ksanmartin909@gmail.com</p>
            <p>© 2021 Kristen San Martin</p>
        </aside>
        <div id = 'footer_wrapper' className= 'flex'>
            <section className='footer_tech'>
                <h5>Technologies</h5>
                <div className= 'tech_list flex'>
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>AdobeXD</p>
                    <p>Postman</p>
                    <p>Github</p>
                </div>    
            </section>

            <img className='footer_image' src ={MERN} alt= 'mern logo' /> 

            <section className='footer_icons'>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            </section>
        </div>
    </footer>
    )

}
export default Footer;