// import React from "react";
// import Link from "./Link";

// const Header = () =>{
//     return(
//         <div className = "ui secondary pointing menu">
//             <Link href= "/" className = "item">Accordion</Link>
//             <Link href= "/list" className = "item">Search</Link>
//             <Link href= "/dropdown" className = "item">Dropdown</Link>
//             <Link href= "/translate" className = "item">Translate</Link>
//         </div>
//     )
// }

// export default Header;


import React from "react";
import Link from "./Link";

const Header = () =>{
    return(
        <div className = "ui secondary pointing menu">
        <Link className = "item" href = "/">Accordion</Link>
        <Link className = "item" href = "/list">Search</Link>
        <Link className = "item" href = "/dropdown">Dropdown</Link>
        <Link className = "item" href = "/translate">Translate</Link>
        </div>
    )
}
export default Header;