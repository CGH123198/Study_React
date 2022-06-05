import { Component } from "react";
import '../practiceCss/ValidationSample.css'

export default class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        vaidated: false
    }

    handleChange = (e) => {
        this.setState( { password: e.target.value });
    }

    handleButtonClick = () => {
        this.setState( { 
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input type="password"
                       ref={ (ref) => this.input = ref }
                       value={this.state.password}
                       onChange={this.handleChange}
                       className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
                
                <button onClick={this.handleButtonClick} >검증하기</button>
            </div>
        );
    }
}
