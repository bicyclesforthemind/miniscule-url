import React, { Component } from 'react';

import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends Component {

    submitLoginForm = (event) => {
        event.preventDefault();
        const { login } = this.props;

        login();
    };

    render() {
        const { email, password } = this.props;

        return (
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" onChange={() => {}} value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={() => {}} value={password} />
                </div>
                <button onClick={() => this.submitLoginForm()}>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password
});

const mapDispatchToProps = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login); 