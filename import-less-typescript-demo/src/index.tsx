import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.less'

const App = () => {
  return(
    <div>
      <h1 className={styles.title}>Hello world</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));