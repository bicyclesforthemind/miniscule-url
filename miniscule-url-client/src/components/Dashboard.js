import React, { Component } from 'react';

import AuthForm from './AuthForm';
import UrlForm from './UrlForm';
import { Button, Grid, Header } from 'semantic-ui-react';

import { logout } from '../actions/auth';

import { connect } from 'react-redux';


class Dashboard extends Component {
    render() {
        const { isLoggedIn, logout } = this.props;

        return (
            <div>
                {
                    localStorage.getItem('user') ? (
                        <Grid style={{ height: '90%' }} textAlign="left" veriticalAlign='middle' padded>
                            <Grid.Row></Grid.Row>
                            <Grid.Row>
                                <Grid.Column style={{maxWidth: '400'}}>
                                    <Button floated="right" onClick={() => logout()}>Sign Out</Button>
                                    <Header as="h1" textAlign="left" size="huge">
                                        URLs
                                    </Header>
                                    <UrlForm />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    ) : (
                        <AuthForm />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);