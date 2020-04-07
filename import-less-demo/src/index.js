import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.less'
import stylesCss from './index.module.css'
import stylesModule from './styles.module.less'
const App = () => {
  console.log(styles);
  console.log(stylesCss);
  return(
    <div>
      <h1 className={styles.title}>Hello world</h1>
      <h1 className={stylesCss.title}>Hello CSS Modules</h1>
      <h1 className={stylesModule.title}>Hello Less Modules</h1>
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

