import { navigate } from '@reach/router';
import React ,{ useState} from 'react';
import "../static/css/App.css"
import "../static/css/Form.css"
import HomeBtn from './buttons/HomeBtn';
import ViewBtn from './buttons/ViewBtn';



const Form = ({type, character, rank, submitHandler, errors}) => {
    const [charName,setCharName] = useState(character.charName)
    const [title, setTitle] = useState(character.title)
    const [year, setYear] = useState(character.year)
    const [actor, setActor] = useState(character.actor)
    const [votes] = useState(character.votes)
    const [url, setUrl] = useState(character.url)
    const [quote, setQuote] = useState(character.quote)

    const goto_view =() => {
        navigate(`/view/${character._id}`)
    }

    const go_home =() => {
        navigate(`/`)
    }


    return (
        <div id = "Form" className='flex wrapper'>
            <h5>Intergration with The Movie Database API coming soon..</h5>
            <div className= 'film_strip flex'>
            <div className ='form_left'>
                {
                    url !== undefined ? <img style= {{opacity: 1}} onClick={goto_view} src = { url } alt = { charName } /> : <img src = 'https://aatfweb.files.wordpress.com/2017/06/film.jpg' alt ="film" />
                }
            </div>

                <form  className='flex' onSubmit={ (e) => submitHandler( e, { charName, title, year, actor,url, votes, quote,rank } ) }>
                    <div className = 'col_1'>
                        <div>
                            <label htmlFor = 'charName' >Character Name:</label>
                            <input name= 'charName'  value= { charName } type ='text' onChange= {(e)=> {setCharName(e.target.value)} }></input>
                            {
                                errors.hasOwnProperty('charName') &&
                                <h6 className ='error'>{errors.charName.message}</h6>
                            }
                        </div>
                        <div>
                            <label htmlFor = 'title'>Movie Title:</label>
                            <input name = 'title' value = { title } type ='text' onChange= {(e)=> {setTitle(e.target.value)} }></input>
                            {
                                errors.hasOwnProperty('title') &&
                                <h6 className ='error'>{errors.title.message}</h6>
                            }
                        </div>

                        <div>
                            <label htmlFor ='year'>Release Year:</label>
                            <input name = 'year' value = { year } type ='text' onChange= {(e)=> {setYear(e.target.value)} }></input>
                            {
                                errors.hasOwnProperty('year') &&
                                <h6 className ='error'>{errors.year.message}</h6>
                            }
                        </div>
                        <div>
                            <label htmlFor ='actor'>Actor / Actress:</label>
                            <input name = 'actor' value = { actor } type ='text' onChange= {(e)=> {setActor(e.target.value)} }></input>
                            {
                                errors.hasOwnProperty('actor') &&
                                <h6 className ='error'>{errors.actor.message}</h6>
                            }
                        </div>
                    </div>

                    <div className='col_2'>
                        <div>
                            <label htmlFor = 'url'>Image Url:</label>
                            <input name = 'url' type ='text'value={url} onChange= {(e)=> {setUrl(e.target.value)} }></input>
                            {
                                errors.hasOwnProperty('url') &&
                                <h6 className ='error'>{errors.url.message}</h6>
                            }
                        </div>

                        <div>
                            <label htmlFor ='quote'>Quote:</label>
                            <textarea name = 'quote' value = { quote } type ='text' onChange= {(e)=> {setQuote(e.target.value)} }></textarea>
                        </div>
                        {
                                errors.hasOwnProperty('quote') &&
                                <h6 className ='error'>{errors.quote.message}</h6>
                            }

                        <div>
                            
                            <input name = 'rank' type ='hidden' value={rank}></input>
                        </div>
                        <button type='submit'>Submit</button>
                        <button onClick = {go_home}>Cancel</button>
                        <HomeBtn />
                        
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;