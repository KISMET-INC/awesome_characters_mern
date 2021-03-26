import React from 'react';
import Slider from 'infinite-react-carousel';

import '../App.css';
import '../static/css/Featured.css';
import VoteBtn from './buttons/VoteBtn';
import EditBtn from './buttons/EditBtn';


const Featured = props => {

    const settings =  {
        //autoplay: true,
        arrows: false,
        dots: true,
        //fwheel: true,
        gutter: 4,
        slidesToShow: 1,
        duration: 700,
        autoplaySpeed: 8000,

    };
    return(
        <div id= "feature_wrapper">
            <h2 className= "feature_title">★ FEATURED  ★ Top 5</h2>
        
            <Slider { ...settings }>

                <div className = 'carousel_item'>
                    <div className = "feature_post">
                        <img src = 'https://i.pinimg.com/originals/fc/e2/f5/fce2f543570ca518c2eead012d7cf161.jpg' alt = "sway" />

                        <article className = "feature_info">
                            <section className ="top">
                                <h3>Sway</h3>
                                <p>1998</p>
                                <p>Angelina Jolie</p>
                                <p>Gone in 60 Seconds</p>
                            </section>
                            <section className = "middle">
                                <h3>Quote:</h3>
                                <p>"You have to work twice as hard, when it's legal"</p>
                            </section>
                            <section className = "bottom">
                                <h3>Votes:</h3>
                                <p>Kristen | Brandon | Kelly | Khalil</p>
                            </section>
                        </article>

                        <div className = "feature_btns flex">
                            <h3>Rank 1</h3>
                            <VoteBtn />
                            <EditBtn />
                        </div>
                    </div>
                </div>


                <div className = 'carousel_item'>
                    <div className = "feature_post">
                        <img src = 'https://i.pinimg.com/originals/8e/4a/a4/8e4aa4690779c21a6b9c0927f63b8d4b.jpg' alt = "tyler durden" />

                        <article className = "feature_info">
                            <section className ="top">
                                <h3>Tyler Durden</h3>
                                <p>1998</p>
                                <p>Angelina Jolie</p>
                                <p>Gone in 60 Seconds</p>
                            </section>
                            <section className = "middle">
                                <h3>Quote:</h3>
                                <p>"Little by little, you're just letting yourself become....Tyler Durden"</p>
                            </section>
                            <section className = "bottom">
                                <h3>Votes:</h3>
                                <p>Kristen | Brandon | Kelly | Khalil</p>
                            </section>
                        </article>

                        <div className = "feature_btns flex">
                            <h3>Rank 2</h3>
                            <VoteBtn />
                            <EditBtn />
                        </div>
                    </div>
                </div>

                <div className = 'carousel_item'>
                    <div className = "feature_post">
                        <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS94VKW_KizvE6KMqRw31Dqc_Mh74hymdgxg&usqp=CAU' alt = "tyler durden" />

                        <article className = "feature_info">
                            <section className ="top">
                                <h3>Ruby Rhod</h3>
                                <p>1998</p>
                                <p>Angelina Jolie</p>
                                <p>Gone in 60 Seconds</p>
                            </section>
                            <section className = "middle">
                                <h3>Quote:</h3>
                                <p>"Super Green!"</p>
                            </section>
                            <section className = "bottom">
                                <h3>Votes:</h3>
                                <p>Kristen | Brandon | Kelly | Khalil</p>
                            </section>
                        </article>

                        <div className = "feature_btns flex">
                            <h3>Rank 2</h3>
                            <VoteBtn />
                            <EditBtn />
                        </div>
                    </div>
                </div>


            </Slider>

        </div>
        
    
    )

}

export default Featured;