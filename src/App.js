
import './App.css';

import StyleSheet from "./components/Stylings/StyleSheet";
import InlineCss from "./components/Stylings/InlineCss";


const App =  () =>
           <div className="App">
              <StyleSheet primary = {true} />
               <InlineCss></InlineCss>
           </div>



export default App;
