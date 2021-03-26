
import React, {useState} from 'react';
import '../App.css';
import '../static/css/Featured.css';
import VoteBtn from './buttons/VoteBtn';
import EditBtn from './buttons/EditBtn';


const Feature = props => {
const [char] = useState(props.char)
console.log(char)

return(
<div className = 'carousel_item'>
    <div className = "feature_post">
        <img src = {char.url} alt = 'person' />
        
        <div className = "feature_info">
                <div className ="top">
                    <h3>{char.charName}</h3>
                    <p>{char.year}</p>
                    <p>{char.movieTitle}</p>
                </div>
                <div className = "middle">
                    <h3>Quote:</h3>
                    {
                        char.quote === undefined ? <p></p> : <p>{char.quote}</p>
                    }
                </div>
                <div className = "bottom">
                    <h3>Votes:</h3>
                    {
                        char.votes == undefined ? <p></p> : <p>{char.votes}</p>
                    }
                </div>
        </div>
        <div className = "feature_btns flex">
            <h3>Rank 1</h3>
            <VoteBtn />
            <EditBtn />
        </div>

    </div>
</div>


)
}
export default Feature;
