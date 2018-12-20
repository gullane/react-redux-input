import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {

    state = { 
        submitting: false, 
        pristine: { 
            lastname: "Smith", 
            firstname: "John",
            address: {
                street: "",
                city: ""
            }
        }, 
        current: { 
            lastname: "Smith", 
            firstname: "John",
            address: {
                street: "",
                city: ""
            } 
        }, 
        error: '',
        message: ''
    }
    
    render = () => {
        const { current, submitting, error, message, valid } = this.state

        return (
            <div className="App">
                <Form 
                    current={current}
                    onChange={this.onChange} 
                    onReset={this.onReset} 
                    onSubmit={this.onSubmit} 
                    submitting={submitting} 
                    error={error}
                    message={message} 
                    valid={valid} />
            </div>
        )
    }

    onChange = (id, value, validation) => {
        debugger
        this.setState({ current: Object.assign({}, this.state.current, { [id]: value }), error: getFieldError(value, this.state.current, validation), message: "" })
    }
    
    onReset = () => this.setState({ current: clone(this.state.pristine), error: "", message: "" })

    onSubmit = () => {
        this.setState({ submitting: true })
        setTimeout(() => {
            if (this.state.current.name === "john") {
                this.setState({ submitting: false, error: "Name already exists", message: "" })
            } else {
                this.setState({ submitting: false, message: "Saved", error: "" })
            }
        }, 2000)
    }

    isValid = () => {

    }

}

export default App;

const clone = o => JSON.parse(JSON.stringify(o))

const getFieldError = (value, values, validation) => validation(value, values)
