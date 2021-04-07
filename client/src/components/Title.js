
import React, { useState } from 'react';
import styles from '../static/css/Title.css';



const Title = (props) => {
    const [title] =  useState(props.title)
    const [subtitle] =  useState(props.subtitle)

    return (

        <div id = 'Title'>
            <h2 style ={styles.h2}>{title}</h2>
            <p style={styles.p}>{subtitle}</p>
        </div>
    )
}

export default Title;