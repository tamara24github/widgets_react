import { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";


// ACCORDION ITEMS
const items = [
    {title: "What is React?", content: "React is a front end Javascript framework."},
    {title: "Why use React?", content: "React is favorite JS library among engineers."},
    {title: "How do you use React?" , content: "You use React by creating components." }
  ];

  //DROPDOWN

  const options = [
    { label: "Color red", value: "red" },
    { label: "Color blue", value: "blue" },
    { label: "Color green", value: "green" }
  ];

const App = () =>{
    const [ selected, setSelected ] = useState(options[0]);
    const [ showDropdown, setShowDropdown ] = useState(true);

    return(
        <div>
            <Header/>
        <Route path = "/"><Accordion items = {items} /></Route>
        <Route path = "/list"><Search /></Route>
        <Route path = "/dropdown"><Dropdown label = "Select a Color" options = {options}  selected = {selected}  onSelectChange ={setSelected}/></Route>
        <Route path = "/translate"><Translate label = "Select a Language"/></Route>
        </div>
       
    )
}

export default App;
