import {Component} from "react";
import MemoComponent from "../Memo/MemoComponent";

class ParentComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Idris'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Idris'
            })
        }, 200)
    }

    render() {

        console.log('parent component');
        return (
            <>
                <MemoComponent name={this.state.name}></MemoComponent>
                {/*<RegComponent name={this.state.name}></RegComponent>*/}
                {/*<PureComp name={this.state.name}></PureComp>*/}
            </>)
    }
}

export default ParentComponent;