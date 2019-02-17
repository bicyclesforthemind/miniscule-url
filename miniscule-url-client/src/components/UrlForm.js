import React, { Component } from 'react';

import { connect } from 'react-redux';

class UrlForm extends Component {

    handleChange = (event, action) => {

    };

    handleSubmitUrlForm = (event) => {
        const { url } = this.props;
    };

    render() {
        const { url, urls } = this.props;

        return (
            <div>
                <form>
                    <input type="url" onChange={(event) => this.handleChange(event, {})} value={url} />
                    <button >Create URL</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    url: state.url.url,
    urls: state.url.urls
});

const mapDispatchToProps = (dispatch) => ({
    getUrls: (dispatch) => (),
    postUrl: (dispatch) => ()
});

export default connect()(UrlForm);