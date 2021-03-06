import React from 'react';
import '../static/css/Feature_Info.css'
import '../static/css/VotesMapper.css'



const VotesMapper = ({votes, resultNum}) => {
    


    return (

        <div id = 'Votes_Mapper'>
        <h4>Votes:  {votes.length} </h4>
            <ul className = 'votes flex'>
            {
                votes.map((vote,i)=>
                i < resultNum ?  <li key={i}>{vote} </li> : <div key={i}></div>
                )
            }
            {
                votes.length > resultNum ? <li className="plus_votes">Plus {votes.length - resultNum } More ... 
                </li> : <></>
            }
            </ul>
        </div>

    )
}

export default VotesMapper