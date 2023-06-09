import React, { useState, useEffect } from "react";
import axios from "axios";


const Search = () =>{

const [term, setTerm] = useState("programming");
const [debouncedTerm, setDebouncedTerm] = useState(term);
const [ results,setResults ] = useState([]);


const renderedResults = results.map((result)=>{
    return (
        <div className = "item" key = {result.pageid}>
            <div className = "right floated content">
                <a 
                className = "ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                    Go
                </a>
            </div>
            <div className = "content">
                <div className = "header"> {result.title}
                </div>
                <span dangerouslySetInnerHTML = {{__html:result.snippet}}></span>
            </div>
        </div>
    )
})

useEffect(()=>{
    const timeoutId = setTimeout(()=>{
        setDebouncedTerm(term)
    },1000);

    return ()=>{
        clearTimeout(timeoutId);
    }
},[term]);


useEffect( ()=>{
    const search = async()=>{
        const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: debouncedTerm
            }
        })
        setResults(data.query.search);
    }
    search();
    
}, [debouncedTerm]);

    return(
        <div>
            <div  className = "ui form">
                <div className = "field">
                <label>Enter Search Term</label>
                <input className = "input" type = "text" onChange = {(e)=>setTerm(e.target.value)} value = {term} />
                </div>
                <div className = "ui celled list">
                {renderedResults}
                </div>
            </div>
        </div>
    )
}

export default Search;

