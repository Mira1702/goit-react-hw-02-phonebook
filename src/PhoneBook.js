import React, { Component } from 'react';

class PhoneBook extends Component {
    state = {        
        contacts: [],
        name: ''
    }

    handleNameChange = event => {
        // console.log(event.currentTarget.value)

        this.setState({inputValue: event.currentTarget.value})
    }

    render() {
        return (
            <form>
                <label>Name
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    ></input>
                </label>
            </form>
            
        )
    }
}

export default PhoneBook;