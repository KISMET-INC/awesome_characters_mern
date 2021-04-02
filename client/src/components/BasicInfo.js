import React from 'react';
import '../static/css/Feature_Info.css'

const BasicInfo = ({character}) => {

    return (
        <section id = 'Basic_Info'>
                <h3>{character.charName}</h3>
                <p>{character.year}</p>
                <p>{character.movieTitle}</p>
                <p>{character.actor}</p>
        </section>
    )


}

export default BasicInfo;