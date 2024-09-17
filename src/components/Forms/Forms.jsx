import {Component} from "react";

class Forms extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            comments: '',
            topic: 'Flutter',

        }
    }

    updateState = (event) => {
        this.setState({
            userName: event.target.value,
        });
    }

    updateCommentState = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    updateOptionState = (event) => {
        this.setState({
            topic: event.target.value,
        })
    }

    onSubmitState = (event) => {

        event.preventDefault();
    }

    render() {
        let {userName, comments, topic} = this.state;

        return (
            <form onSubmit={this.onSubmitState}>
                <div>
                    <label> User Name</label>
                    <input type='text' value={userName} onChange={this.updateState}>
                    </input>
                    <div>
                        <label> Comments </label>
                        <textarea value={comments} onChange={this.updateCommentState}></textarea>
                    </div>

                    <div>
                        <label> Stacks </label>
                        <select value={topic} onChange={this.updateOptionState}>
                            <option value='Flutter'> Flutter</option>
                            <option value='React'> React</option>
                            <option value='Nextjs'> Nextjs</option>
                        </select>
                    </div>
                    <div>
                        <button
                            type='submit'
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Forms;