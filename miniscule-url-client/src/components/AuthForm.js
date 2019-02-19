import React, { Component } from 'react';

import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
    Divider,
    Message
} from 'semantic-ui-react';

import { connect } from 'react-redux';

import { login, signup, setEmail, setPassword, setConfirmPassword, setIsSignup, setError } from '../actions/auth';

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
            const { signup, setError } = this.props;

            if (password === confirmPassword && password.length > 5) {
                signup(email, password);
            }
            else {
                setError({
                    header: 'Invalid Signup',
                    content: 'Please try again.'
                });
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
            error
        } = this.props;

        return (
            <Grid style={{ height: '100%' }} textAlign="center" verticalAlign='middle' padded>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{ maxWidth: 400 }}>
                    {
                        !isSignup && (
                            <Header size="small" textAlign="center">You need to sign in or sign up before continuing.</Header>
                        )
                    }
                    <Segment padded>
                        <Form>
                            {   isSignup ? (
                                    <Header as="h1" size="huge" textAlign="center">Sign Up</Header>
                                ) : (
                                    <Header as="h1" size="huge" textAlign="center">Sign In</Header>
                                )
                            }
                            <Form.Input type="email" textAlign="left" value={email} onChange={(event) => this.handleChange(event, setEmail)} fluid label="Email" />
                            <Form.Input type="password" textAlign="left" value={password} onChange={(event) => this.handleChange(event, setPassword)} fluid label="Password (6 character min.)"/>
                            {
                                isSignup && (
                                    <Form.Input type="password" value={confirmPassword} onChange={(event) => {this.handleChange(event, setConfirmPassword)}} fluid label="Confirm Password"/>
                                )
                            }
                            {
                                (Object.keys(error).length !== 0) && (
                                    <Message error header={error.header} content={error.content} visible />
                                )
                            }
                            {
                                isSignup ? (
                                    <div>
                                        <Button type="submit" color="red" fluid size="large" onClick={(event) => this.submitAuthForm(event, email, password, confirmPassword, isSignup)}>Sign Up</Button>
                                        <Divider hidden />
                                        <Button fluid onClick={(event) => this.handleIsSignup(event, setIsSignup, false)}>Sign In</Button>
                                    </div>
                                ) : (
                                    <div>
                                        <Button type="submit" color="red" fluid size="large" onClick={(event) => this.submitAuthForm(event, email, password, '', isSignup)}>Sign In</Button>
                                        <Divider hidden />
                                        <Button fluid onClick={(event) => this.handleIsSignup(event, setIsSignup, true)}>Sign Up</Button>
                                    </div>
                                )
                            }
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    confirmPassword: state.auth.confirmPassword,
    isSignup: state.auth.isSignup,
    error: state.auth.error
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