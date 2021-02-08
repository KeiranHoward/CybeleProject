import React from 'react';
import FormInput from '../../components/form-input/form-input';
import './sign-in.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            required
            type='email'
            onChange={this.handleChange}
          />
          <label>Email</label>
          <FormInput
            name='password'
            value={this.state.password}
            required
            type='password'
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default SignIn;
