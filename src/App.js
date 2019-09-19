import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';


class App extends React.Component {
    
    constructor(props){
    super(props);
    this.state = {
        isVisible: true,
        username:""
    }
    // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemount = this.handleRemount.bind(this);
}

handleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    fetch('https://reqres.in/api/login/', {
        method: 'POST',
        body: JSON.stringify({
            "username": username,
            "password": password
            }
        ),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then((result) => {
            if (result.error) {
                alert(result.error);
            } else {
                this.setState({
                    isVisible: false,
                    username: username
                }, function () {
                    console.log(this.state.isVisible)
                });
            }

        })
        .catch(() => console.log("Can’t access response of url, Blocked by browser?"));

    
    return false;
}
handleRemount(e) {
    this.setState({
        isVisible: true,
        username:""
    });
    e.preventDefault();
}
 
       
    render() {

        // const for React CSS transition declaration
        let component = this.state.isVisible ? <LoginForm onSubmit={this.handleSubmit} key='modal' /> : <Welcome onClick={this.handleRemount} user={this.state.username} key = 'bringitback' />;

        return  <div>{component}</div>
        
    };
  
}

export default App;
