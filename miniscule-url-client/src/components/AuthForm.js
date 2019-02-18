import React, { Component } from 'react';

import { connect } from 'react-redux';

import { login, signup, setEmail, setPassword, setConfirmPassword, setIsSignup } from '../actions/auth';

class AuthForm extends Component {

    handleChange = (event, action) => {
        action(event.target.value);
    };

    handleIsSignup = (event, action, isSignup) => {
        event.preventDefault();
        action(isSignup);
    };

    submitAuthForm = (event, email, password, confirmPassword, isSignup) => {
        event.preventDefault();
        if (isSignup) {
            const { signup } = this.props;

            if (password === confirmPassword) {
                signup(email, password);
            }
            else {
                // TODO: add error
            }
        }
        else {
            const { login } = this.props;

            login(email, password);
        }
    };

    render() {
        const { 
            email, 
            password, 
            confirmPassword,
            setEmail,
            setPassword,
            setConfirmPassword,
            setIsSignup, 
            isSignup,
            signup,
            login
        } = this.props;

        return (
            
            <form>
                {   isSignup ? (
                        <h2>Sign Up</h2>
                    ) : (
                        <h2>Login</h2>
                    )
                }
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(event) => {this.handleChange(event, setEmail)}} value={email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(event) => {this.handleChange(event, setPassword)}} value={password} />
                </div>
                { isSignup && (
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword" onChange={(event) => {this.handleChange(event, setConfirmPassword)}} value={confirmPassword} />
                    </div>
                ) }
                {
                    isSignup ? (
                        <div>
                            <button onClick={(event) => this.submitAuthForm(event, email, password, confirmPassword, isSignup)}>Sign Up</button>
                            <button onClick={(event) => this.handleIsSignup(event, setIsSignup, false)}>Login</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={(event) => this.submitAuthForm(event, email, password, '', isSignup)}>Login</button>
                            <button onClick={(event) => this.handleIsSignup(event, setIsSignup, true)}>Sign Up</button>
                        </div>
                    )
                }
                
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    confirmPassword: state.auth.confirmPassword,
    isSignup: state.auth.isSignup
});

const mapDispatchToProps = (dispatch) => ({
    setEmail: (email) => dispatch(setEmail(email)),
    setPassword: (password) => dispatch(setPassword(password)),
    setConfirmPassword: (confirmPassword) => dispatch(setConfirmPassword(confirmPassword)),
    setIsSignup: (isSignup) => dispatch(setIsSignup(isSignup)),
    signup: (email, password) => dispatch(signup(email, password)),
    login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm); 