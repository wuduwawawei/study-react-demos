import React from 'react'

const Repo =(props) => {
  return(
    <div>
      <h2>Repo Page</h2>
      <h2>{props.match.params.repoName}</h2>
    </div>
  )
}

export default Repo
