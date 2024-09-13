import './App.css';

import StyleSheet from "./components/Stylings/StyleSheet";
import styles from "./components/Stylings/appStyles.module.css";
import  "./components/Stylings/MyStylings.css";
import InlineCss from "./components/Stylings/InlineCss";

const App =  () =>
           <div className="App">

               <h1 className = 'error'> Error</h1>
               <h1 className = {styles.success}> Success</h1>

              <StyleSheet primary = {true} />
           <InlineCss></InlineCss>
           </div>



export default App;
