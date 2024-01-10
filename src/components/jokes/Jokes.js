import {useState , useEffect} from "react";
import "./Jokes.css"
const Jokes = () =>{

    const url = "https://api.chucknorris.io/jokes/random"
    const [isLoading , setIsLoading] = useState(true)

    const [joke , setJoke] = useState({})

    async function getJoke() {
        setIsLoading(true)
        const response = await fetch(url)

        const data = await response.json()
        console.log(data);
        setJoke(data)
        setIsLoading(false)
    }

    useEffect(()=>{
        setTimeout(()=>{
            getJoke();
        }, 3000);
    },[])
    return(
        <div className="jokes-sec">
            <div className="container joke">
                <h2>Random Jokes Generator</h2>
                <hr />
                {isLoading ? (
                    <h3>Loading...</h3>
                ) : 
                    <p>{joke.value}</p>
                
                }
                
                <hr />
                <button onClick={getJoke}>Generate New Joke</button>
            </div>
        </div>
    )
}

export default Jokes