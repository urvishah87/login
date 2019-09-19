import React from 'react';
import Logo from './Logo';
import Input from './Input';


//const ReactCSSTG = React.addons.CSSTransitionGroup;


// Login form
export default class LoginForm extends React.Component {
    render() {
        return <div className='Modal'>
            <Logo />
            <form onSubmit={this.props.onSubmit}>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button> Sign In</button>
            </form>
            
        </div>
    }
}

