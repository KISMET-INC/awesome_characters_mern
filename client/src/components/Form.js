import { navigate } from '@reach/router';
import React ,{ useState} from 'react';
import "../App.css"
import "../static/css/Form.css"
import HomeBtn from './buttons/HomeBtn';
import ViewBtn from './buttons/ViewBtn';



const Form = props => {
    const [character] = useState(props.character)
    const [charName,setCharName] = useState(character.charName)
    const [title, setTitle] = useState(character.title)
    const [year, setYear] = useState(character.year)
    const [actor, setActor] = useState(character.actor)
    const [votes] = useState(character.votes)
    const [url, setUrl] = useState(character.url)
    const [quote, setQuote] = useState(character.quote)
    const [rank] = useState(props.rank)

    const goto_view =() => {
        navigate(`/view/${character._id}`)
    }

    const go_home =() => {
        navigate(`/`)
    }



    return (
        <div id = "add_form_wrapper" className='flex'>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <div className= 'film_strip flex'>
            <div className ='form_left'>
                {
                    charName !== "" ? <img style= {{opacity: 1}} onClick={goto_view} src = { url } alt = { charName } /> : <img src = 'https://aatfweb.files.wordpress.com/2017/06/film.jpg' alt ="film" />
                }
            </div>

                <form  className='flex' onSubmit={ (e) => props.submitHandler( e, { charName, title, year, actor,url, votes, quote,rank } ) }>
                    <div className = 'col_1'>
                        <div>
                            <label htmlFor = 'charName' >Character Name:</label>
                            <input name= 'charName'  value= { charName } type ='text' onChange= {(e)=> {setCharName(e.target.value)} }></input>
                        </div>
                        <div>
                            <label htmlFor = 'title'>Movie Title:</label>
                            <input name = 'title' value = { title } type ='text' onChange= {(e)=> {setTitle(e.target.value)} }></input>
                        </div>

                        <div>
                            <label htmlFor ='year'>Release Year:</label>
                            <input name = 'year' value = { year } type ='text' onChange= {(e)=> {setYear(e.target.value)} }></input>
                        </div>
                        <div>
                            <label htmlFor ='actor'>Actor / Actress:</label>
                            <input name = 'actor' value = { actor } type ='text' onChange= {(e)=> {setActor(e.target.value)} }></input>
                        </div>
                    </div>

                    <div className='col_2'>
                        <div>
                            <label htmlFor = 'url'>Image Url:</label>
                            <input name = 'url' type ='text' onChange= {(e)=> {setUrl(e.target.value)} }></input>
                        </div>

                        <div>
                            <label htmlFor ='quote'>Quote:</label>
                            <textarea name = 'quote' value = { quote } type ='text' onChange= {(e)=> {setQuote(e.target.value)} }></textarea>
                        </div>

                        <div>
                            
                            <input name = 'votes' type ='hidden' value='Anonymous'></input>
                            <input name = 'rank' type ='hidden' value={rank}></input>
                        </div>
                        <button type='submit'>Submit</button>
                        <button onClick = {go_home}>Cancel</button>
                        <HomeBtn />
                        <ViewBtn rank = {rank} character_id = {character._id} />

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;