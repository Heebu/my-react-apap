import  './MyStylings.css'

function StyleSheet(props) {
    const className = props.primary? 'primary' : '';
    return (
        <>
          <h1 className = {`${className} font-xl `} > Stylesheets</h1>
        </>
    )
}

export default StyleSheet;