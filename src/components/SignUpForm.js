import React, {Component} from 'react'

class SignUpForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleUsernameChange(e){
    this.setState({username: e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    console.log(`new username is ${this.state.username} and password is ${this.state.password}`);
  }

render(){
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="username"
    value={this.state.username}
    onChange = {this.handleUsernameChange} />
    <input type="text" placeholder="password"
    value = {this.state.password}
    onChange={this.handlePasswordChange} />
    <input type="submit" value="signup"/>
    </form>
    </div>
  )
}
}

export default SignUpForm;
