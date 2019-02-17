import React, { Component } from 'react';

import { connect } from 'react-redux';

import { login, signup, setEmail, setPassword, setConfirmPassword } from '../actions';

class AuthForm extends Component {

    handleChange = (event, action) => {
        action(event.target.value);
    };

    submitAuthForm = (event, isSignup) => {
        event.preventDefault();
        if (isSignup) {
            const { 
                signup, 
                email, 
                password, 
                confirmPassword 
            } = this.props;

            if (password === confirmPassword) {
                signup(email, password);
            }
            else {
                // TODO: add error
            }
        }
        else {
            const { login, email, password } = this.props;

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
            isSignup 
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
                    <label>Email</label>
                    <input type="email" onChange={(event) => {this.handleChange(event, setEmail)}} value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={(event) => {this.handleChange(event, setPassword)}} value={password} />
                </div>
                { isSignup && (
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={(event) => {this.handleChange(event, setConfirmPassword)}} value={confirmPassword} />
                    </div>
                ) }
                {
                    isSignup ? (
                        <div>
                            <button onClick={(event) => this.submitAuthForm(event, isSignup)}>Sign Up</button>
                            <button>Login</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={(event) => this.submitAuthForm(event, isSignup)}>Login</button>
                            <button>Sign Up</button>
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
    signup: (email, password) => dispatch(signup(email, password)),
    login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm); 