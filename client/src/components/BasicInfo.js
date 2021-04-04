import React from 'react';
import '../static/css/Feature_Info.css'

const BasicInfo = ({character}) => {

    return (
        <section id = 'Basic_Info'>
                <div className ="movie_details">
                    <div>
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
        </section>
    )


}

export default BasicInfo;