import  './MyStylings.css'
import {useState} from "react";

function StyleSheet(props) {
    const className = props.primary? 'primary' : '';


    const [, set] = useState();
    return (
        <>
          <h1 className = {`${className} font-xl `} > Stylesheets</h1>
        </>
    )
}

export default StyleSheet;