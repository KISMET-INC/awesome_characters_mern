import React ,{ useState, useEffect} from 'react';
import "../App.css"
import "../static/css/Form.css"
import SubmitBtn from './buttons/DeleteBtn';



const Form = props => {
    const {character, setCharacter} = useState(props.character)
    const [charName,setCharName] = useState("")
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [actor, setActor] = useState("")
    const [votes, setVotes] = useState("kk")
    const [url, setUrl] = useState("")
    const [quote, setQuote] = useState("")

    useEffect (()=>{

        if (props.character != undefined){
            setCharName(props.character.charName)
            setTitle(props.character.title)
            setYear(props.character.year)
            setActor(props.character.actor)
            setQuote(props.character.quote)
            setUrl(props.character.url)

            console.log(character)

        }


    }, [])


    return (
        <div id = "add_form_wrapper">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
            <div className= 'film_strip flex'>
            {
                url != "" ? <img src = { url } alt = { charName } /> : <img src = 'https://aatfweb.files.wordpress.com/2017/06/film.jpg' alt ="film" />
            }

                <form  className='flex' onSubmit={ (e) => props.submitHandler( e, { charName, title, year, actor,url, votes, quote } ) }>
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
                            <input name = 'quote' value = { quote } type ='text' onChange= {(e)=> {setQuote(e.target.value)} }></input>
                        </div>

                        <div>
                            <label htmlFor = 'votes'>Your Name -- be the first vote! </label>
                            <input name = 'votes' value ="votes" type ='text' onChange= {(e)=> {setVotes(...votes,e.target.value)} }></input>
                        </div>
                        <button type='submit'>Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Form;