import React, { Component } from 'react';

import AuthForm from './AuthForm';
import UrlForm from './UrlForm';

import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        const { isLoggedIn } = this.props;

        return (
            <div>
                {
                    isLoggedIn ? (
                        <div>
                            <h2>URLs</h2>
                            <button>Sign Out</button>
                            <UrlForm />
                        </div>
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

export default connect(mapStateToProps)(Dashboard);