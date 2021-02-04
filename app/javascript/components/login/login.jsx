import React, {Component} from 'react';
import './login.scss'; 
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
           [event.target.name]: event.target.value 
        }
        );
    }
    handleSubmit(event) {
        const {email, password} = this.state;
        axios.post( "http://localhost:3000/sessions", 
        { 
            user: {
                email: email,
                password: password
                }
            },
            {withCredentials: true}
            )
            .then(response => {
                console.log("login res", response)
                if (response.statusText === "OK"){
                    this.props.handleSuccessfulAuth(response.data);
                }
            }).catch(error => {
                console.log("login error", error);
            });
    
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder= 'Email' 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        required
                        />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder= 'Password' 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        required
                        />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}