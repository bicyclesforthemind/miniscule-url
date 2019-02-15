import React, { Component } from 'react';

import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends Component {

    

    render() {
        const { email, password, login } = this.props;

        return (
            <input></input>
            <input></input>
            <button></button>
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