import React from "react";


class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: '', project: 0, author: 0}
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.text]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        this.props.createTodo(this.state.name, this.state.author,this.state.project)
        console.log(this.state.name)
        console.log(this.state.author)
        console.log(this.state.project)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="text">text</label>
                    <input type="text" className="form-control" name="text"
                           value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="author">author</label>
                    <input type="number" className="form-control" name="author"
                           value={this.state.author} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="project">project</label>
                    <input type="number" className="form-control" name="project"
                           value={this.state.project} onChange={(event) => this.handleChange(event)}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );
    }
}

export default TodoForm

