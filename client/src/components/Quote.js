import React from 'react';
import '../static/css/Feature_Info.css'

const Quote = ({character}) => {

    return (
        <section id = 'Quote'>
                <h3>Quote:</h3>
                <p>{character.quote}</p>
        </section>
    )


}

export default Quote;