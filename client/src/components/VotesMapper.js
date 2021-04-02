import React from 'react';
import '../static/css/VotesMapper.css'


const VotesMapper = (props) => {

    return (

        <div id = 'Votes_Mapper'>
        <h3>Votes:  {props.votes.length} </h3>
            <ul className = 'votes flex'>
            {
                props.votes.map((vote,i)=>
                i < 9 ?  <li key={i}>{vote} </li> : <></>
                )
            }
            {
                props.votes.length > 9 ? <li>Plus {props.votes.length - 9 } More ... 
                </li> : <></>
            }
            </ul>
        </div>

    )
}

export default VotesMapper