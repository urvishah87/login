import React from 'react';
// Button to brind the modal back
export default class Welcome extends React.Component {
    render() {
        return <div><h4 className="welcome">Welcome {this.props.user}!</h4>
            <button className="logout" onClick={this.props.onClick} key={this.props.className}>Logout</button></div >
    }
}
