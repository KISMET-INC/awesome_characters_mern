import React from 'react';
import '../App.css';
import clapper from '../static/img/clapper.png'; 
import Add_Char_Btn from './buttons/Add_Char_Btn';
import Search_Btn from './buttons/Search_Btn';
import Signature from './buttons/Signature';


const Nav = props => {

    return (
        <nav class="flex">
            <div class = "inner_nav flex">
                <section class="nav_left flex">
                    <img src ={clapper} alt= "movie clapper icon" />
                    
                    <div class ="heading">
                        <p>Rate your favorite movie characters</p>
                        <h1>Epic Movie Characters</h1>
                    </div>
                </section>

                <section class ="nav_right">
                    <Signature />
                    <div  class="flex">
                        <Search_Btn />
                        <Add_Char_Btn />
                    </div> 
                </section>
            </div>
        </nav>
    )
}
export default Nav;