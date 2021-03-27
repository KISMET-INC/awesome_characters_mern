import React ,{ useState} from 'react';
import "../App.css"
import "../static/css/Form.css"
import SubmitBtn from './buttons/SubmitBtn';



const Form = props => {
    const [setCharName] = useState("")
    const [ setMovieTitle] = useState("")
    const [setMovieYear] = useState("")
    const [ setActor] = useState("")
    const [voters, setVoters] = useState([])
    const [setImgUrl] = useState("")



    const add_character = (e) => {
        e.preventDefault()
    }

    return (
        <div id = "add_form_wrapper">
            <h2>Add to the EPIC...</h2>
            <p>Who do you think is an epic movie character?</p>
            <div className= 'film_strip flex'>
                <img src="https://aatfweb.files.wordpress.com/2017/06/film.jpg" alt ="film icon"></img>

                <form  className='flex' onSubmit={add_character}>
                    <div className = 'col_1'>

                        <div>
                            <label>Character Name:</label>
                            <input type ='text' onChange= {(e)=> setCharName(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Movie Title:</label>
                            <input type ='text' onChange= {(e)=> setMovieTitle(e.target.value)}></input>
                        </div>

                        <div>
                            <label>Release Year:</label>
                            <input type ='text' onChange= {(e)=> setMovieYear(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Actor / Actress:</label>
                            <input type ='text' onChange= {(e)=> setActor(e.target.value)}></input>
                        </div>
                    </div>

                    <div className='col_2'>
                        <div>
                            <label>Image Url:</label>
                            <input type ='text' onChange= {(e)=> setImgUrl(e.target.value)}></input>
                        </div>

                        <div>
                            <label>Your Name -- be the first vote! </label>
                            <input type ='text' onChange= {(e)=> setVoters( ...voters, e.target.value)}></input>
                        </div>
                        <SubmitBtn />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;