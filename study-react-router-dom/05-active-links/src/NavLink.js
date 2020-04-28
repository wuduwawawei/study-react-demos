import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = (props) => {
  return(
    <Link {...props} activeClassName="active"/>
  )
}

export default NavLink

// export default React.createClass({
//   render() {
//     return <Link {...this.props} activeClassName="active"/>
//   }
// })