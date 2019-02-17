import React, { Component } from 'react';

import AuthForm from './AuthForm';

import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { isLoggedIn } = this.props;

        return (
            <div>
                { !isLoggedIn && (
                    <AuthForm />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Dashboard);