import React from 'react';
import '../static/css/Feature_Info.css'
import Quote from './Quote';

const BasicInfo = ({character}) => {

    return (
        <section id = 'Basic_Info'>
                <div className ="movie_details">
                    <div className = 'actor'>
                        <h5>Actor:</h5>
                        <p>{character.actor}</p>
                    </div>
                    <div>
                        <h5>Movie:</h5>
                        <p>{character.title}</p>
                    </div>
                    <div>
                        <h5>Year:</h5>
                        <p>{character.year}</p>
                    </div>
                </div>
                <Quote character = {character} />
        </section>
    )


}

export default BasicInfo;