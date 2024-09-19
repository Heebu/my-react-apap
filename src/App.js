import './App.css';
import "./components/Stylings/MyStylings.css";
import ParentComponent from "./components/PureComponent/ParentComponent";
import AnotherCounter from "./components/AnotherCounter";

const App = () =>
    <div className="App">
        <ParentComponent></ParentComponent>
        <AnotherCounter></AnotherCounter>

    </div>


export default App;
