import React from 'react';
import '../static/css/App.css';
import '../static/css/Footer.css'
import MERN from '../static/img/MERN-logo.png'; 
import ScrollAnimation from 'react-animate-on-scroll'; 


const Footer = props => {



    return(

        <ScrollAnimation        
        animateOnce = {true}
        animateIn="slideInUp"
        initiallyVisible={false}
        delay={500}
        >
        <footer id = 'Footer'>
        <aside className = 'footer_aside'>
        <section className='footer_icons'>
        <a target="_blank" rel="noreferrer" href="https://github.com/KISMET-INC  "><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kristen-sanmartin/"><i className="fab fa-linkedin"></i></a>
        </section>

        <a href="mailto:ksanmartin909@gmail.com"><p>ksanmartin909@gmail.com</p></a>
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
                    <p>Adobe XD,</p>
                    <p>Photoshop</p>
                    <p>Postman</p>
                    <p>Github</p>
                </div>    
            </section>

            <img className='footer_image' src ={MERN} alt= 'mern logo' /> 

            <section className='footer_tech'>
                <h5>Libraries</h5>
                <div className= 'tech_list flex'>
                    <p>animate-on-scroll</p>
                    <p>react-owl-carousel</p>
                    <p>material-ui</p>
                </div>    
            </section>
        </div>
    </footer>
    </ScrollAnimation>
    )

}
export default Footer;