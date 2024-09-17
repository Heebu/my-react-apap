import {Component} from "react";

class RegComponent extends Component {
    render() {
        console.log('regular component');

        return (
            <>Regular Component {this.props.name}</>
        )
    }
}

export default RegComponent;