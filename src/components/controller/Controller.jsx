import React, { Component } from 'react';
import Input from '../input/Input';
import Output from '../output/Output';
import History from '../history/History';
import { hitApi } from '../../services/hit-api';

class Controller extends Component {
  state = {
    history: [],
    url: '',
    method: 'GET',
    text: {},
    body: '',
    loading: false,
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const now = new Date().toString();
    const { url, method, body } = this.state;
    const newHistoryItem = {
      url,
      method,
      body,
      date: now,
    };
    const newHistory = this.state.history;

    newHistory.push(newHistoryItem);
    this.setState({ history: newHistory }); 


    const apiResult = await hitApi(url, body, method);

    console.log(apiResult, 'api');
    
    this.setState(apiResult);

    console.log(state, 'submit');

    this.setState({ loading: false });

    console.log(state, 'finalstate');
  }

  render() {
    return (
      <div>
        <Input url={this.state.url} body={this.state.body} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Output url={this.state.url} text={this.state.text} />
        <History history={this.state.history} />
      </div>
    );
  }
}

export default Controller;
