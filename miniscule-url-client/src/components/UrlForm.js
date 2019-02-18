import React, { Component } from 'react';

import { setUrl, postUrl, getUrls  } from '../actions/url';

import { connect } from 'react-redux';

class UrlForm extends Component {

    handleChange = (event, action) => {
        action(event.target.value);
    };

    handleSubmitUrlForm = (event, url) => {
        event.preventDefault();

        const { postUrl, getUrls } = this.props;

        postUrl(url);
        getUrls();
    };

    componentDidMount() {
        const { getUrls } = this.props;

        getUrls();
    }

    render() {
        const { url, urls, setUrl } = this.props;

        return (
            <div>
                <form>
                    <input type="url" onChange={(event) => this.handleChange(event, setUrl)} value={url} />
                    <button onClick={(event) => this.handleSubmitUrlForm(event, url)}>Create URL</button>
                </form>
                <table>
                <tr>
                    <th>Original URL</th>
                    <th>Miniscule URL</th>
                    <th>Hit Count</th>
                </tr>
                {
                    urls.map(({original_url, root_url, miniscule_url, hit_count}, index) => (
                        <tr>
                            <td>{`${original_url}`}</td>
                            <td><a href={`${root_url + '/t/' + miniscule_url}`}>{`${root_url + '/t/' + miniscule_url}`}</a></td>
                            <td>{`${hit_count}`}</td>
                        </tr>
                    ))
                }
                </table>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    url: state.url.url,
    urls: state.url.urls
});

const mapDispatchToProps = (dispatch) => ({
    setUrl: (url) => dispatch(setUrl(url)),
    postUrl: (url) => dispatch(postUrl(url)),
    getUrls: () => dispatch(getUrls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlForm);