import {Component} from "react";

class LifeCycleA extends Component {

    constructor() {
        super();
        this.state = ({
            name: 'Idris',
        })
        console.log(this.state.name);
        console.log('LifeCycle A');
    }

    static GetDeriveStateFromProps(props, state) {
        console.log('lifeCycle B');
        return null;
    }

    componentDidMount() {
        console.log('lifeCycle D');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate()');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

        console.log('getSnapshotBeforeUpdate()');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate()');
    }

    render() {
        console.log('LifeCycle C');
        return (
            <div> Life Cycle </div>
        )
    }
}

export default LifeCycleA;