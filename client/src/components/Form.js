import React ,{ useState} from 'react';
import "../App.css"
import "../static/css/Form.css"



const Form = props => {
    const [charName, setCharName] = useState("")
    const [movieTitle, setMovieTitle] = useState("")
    const [movieYear, setMovieYear] = useState("")
    const [actor, setActor] = useState("")
    const [quote, setQuote] = useState("")
    const [voters, setVoters] = useState([])
    const [imgUrl, setImgUrl] = useState("")



    const add_character = (e) => {
        e.preventDefault()
    }

    return (
        <div id = "add_form_wrapper">
            <h2>Add to the EPIC...</h2>
            <p>Who do you think is an epic character?</p>
            <div class= 'flex'>
                <img src="https://aatfweb.files.wordpress.com/2017/06/film.jpg" alt ="film icon"></img>

                <form class='flex' onSubmit={add_character}>
                    <label>Character Name:</label>
                    <input type ='text' onChange= {(e)=> setCharName(e.target.value)}></input>

                    <label>Actor / Actress:</label>
                    <input type ='text' onChange= {(e)=> setActor(e.target.value)}></input>

                    <label>Movie Title:</label>
                    <input type ='text' onChange= {(e)=> setMovieTitle(e.target.value)}></input>

                    <label>Release Year:</label>
                    <input type ='text' onChange= {(e)=> setMovieYear(e.target.value)}></input>

                    <label>Image Url:</label>
                    <input type ='text' onChange= {(e)=> setImgUrl(e.target.value)}></input>

                    <label>Your Name: (to be the first vote! )</label>
                    <input type ='text' onChange= {(e)=> setVoters( ...voters, e.target.value)}></input>

                </form>
            </div>
        </div>
    )
}

export default Form;