import React from 'react';
import '../static/css/Feature_Info.css'

const Quote = ({character}) => {

    return (
        <section id = 'Quote'>
                <h5>Quote:</h5>
                <p>{character.quote}</p>
        </section>
    )


}

export default Quote;