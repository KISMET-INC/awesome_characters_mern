import React from 'react';
import '../static/css/Feature_Info.css'

const BasicInfo = ({character}) => {

    return (
        <section id = 'Basic_Info'>
                <h3>{character.charName}</h3>
                <div className ="movie_details">
                    <p>Movie: &nbsp; {character.title}</p>
                    <p>Year:  &nbsp; {character.year}</p>
                    <p>Actor:  &nbsp; {character.actor}</p>
                </div>
        </section>
    )


}

export default BasicInfo;