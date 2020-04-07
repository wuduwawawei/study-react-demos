import React from 'react'
import {Link} from "react-router-dom";

const App = () => {
  return(
    <div>
      <h1>React Router Tutorial</h1>
      <ul role="nav">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/repos">Repos</Link></li>
      </ul>
      <h1>我是App组件的Child</h1>
      <h1>我是App组件的Child</h1>
    </div>
  )
}

export default App