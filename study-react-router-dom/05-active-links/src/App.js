import React from 'react'
import {Link} from "react-router-dom";
import NavLink from "./NavLink";

const App = () => {
  return(
    <div>
      <h1>React Router Tutorial</h1>
      <ul role="nav">
        <li><Link to="/about" activeStyle={{color: 'blue'}}>About</Link></li>
        <li><Link to="/repos" activeClassName="active">Repos</Link></li>
        <li><NavLink to="/about">About NavLink</NavLink></li>
        <li><NavLink to="/repos">Repos NavLink</NavLink></li>
      </ul>
      <h1>我是App组件的Child</h1>
      <h1>我是App组件的Child</h1>
    </div>
  )
}

export default App