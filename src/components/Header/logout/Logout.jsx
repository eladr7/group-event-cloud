import React from 'react';

const Logout = ({ logo, ...props }) => {

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome {props.user.username}</h2>
            </div>
            <p className="App-intro">
                <button type="button" className="form-submit" onClick={props.handleLogout}>Logout</button>
            </p>
        </div>
    );
};

export default Logout;
