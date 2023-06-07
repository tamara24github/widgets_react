import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
      label: "Afrikaans",
      value: "af"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "Hindi",
    value: "hi"
  },
  {
    label: "Serbian",
    value: "sr"
  }
  ];


const Translate = ()=>{

    const [ language, setLanguage ] = useState(options[0]);
    const [ text, setText ] = useState("");


    return(
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter Text</label>
                    <input onChange = {(e)=>setText(e.target.value)} text = "value" />
                </div>
            </div>
            <Dropdown label= "choose language" options = {options} selected = {language} onSelectChange = {setLanguage} />
            <hr/>
            <h3 className = "ui header"> Output</h3>
            <Convert language = {language} text = {text} />
        </div>
    )
}

export default Translate;
