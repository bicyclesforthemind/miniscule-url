import React, { Component } from 'react';

import { setUrl, postUrl, getUrls  } from '../actions/url';

import { connect } from 'react-redux';
import { Segment, Form, Table, Button, Message } from 'semantic-ui-react';

class UrlForm extends Component {

    handleChange = (event, action) => {
        action(event.target.value);
    };

    handleSubmitUrlForm = (event, url) => {
        event.preventDefault();

        const { postUrl, getUrls } = this.props;

        postUrl(url)
        .then(() => getUrls())
        .catch((error) => console.error(error));
        
    };

    componentDidMount() {
        const { getUrls } = this.props;

        getUrls();
    }

    render() {
        const { 
            url, 
            urls, 
            setUrl,
            error
         } = this.props;

        return (
            <div>
                <Segment padded>
                    <Form>
                        <Form.Input type="url" value={url} fluid onChange={(event) => this.handleChange(event, setUrl)} />
                        { (Object.keys(error).length !== 0) && ( <Message error header={error.header} content={error.content} visible /> )}
                        <Button type="submit" color="red" onClick={(event) => this.handleSubmitUrlForm(event, url)}>Create URL</Button>
                    </Form>
                </Segment>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Original URL</Table.HeaderCell>
                            <Table.HeaderCell>Miniscule URL</Table.HeaderCell>
                            <Table.HeaderCell>Hit Count</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            urls.map(({original_url, root_url, miniscule_url, hit_count}, index) => (
                                <Table.Row>
                                    <Table.Cell>{`${original_url}`}</Table.Cell>
                                    <Table.Cell><a href={`${root_url + '/t/' + miniscule_url}`}>{`${root_url + '/t/' + miniscule_url}`}</a></Table.Cell>
                                    <Table.Cell>{`${hit_count}`}</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    url: state.url.url,
    urls: state.url.urls,
    error: state.url.error
});

const mapDispatchToProps = (dispatch) => ({
    setUrl: (url) => dispatch(setUrl(url)),
    postUrl: (url) => dispatch(postUrl(url)),
    getUrls: () => dispatch(getUrls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UrlForm);