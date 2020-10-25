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

  setLoading = () => this.setState({ loading: true })
  setUnloading = () => this.setState({ loading: false })

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  updateHistory = newHistoryItem => {
    console.log('history updated');
    const newHistoryItemData = newHistoryItem;
    const now = new Date().toString();
    const newHistory = this.state.history;

    newHistoryItemData.date = now;
    newHistory.push(newHistoryItemData);
    this.setState({ history: newHistory }); 
  }

  updateText = newText => {
    console.log(newText, 'new text');
    this.setState({ text: newText });
  }

  fetchApi = (url, method, body) => {
    console.log(method, 'fetchmethod');
    return hitApi(url, method, body)
      .then(res => this.updateText(res));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state, 'api zeo');
    const { url, method, body } = this.state;

    this.setLoading();
    this.updateHistory({ url, method, body, });

    console.log(this.state, 'api one');

    this.fetchApi(url, method, body);


    console.log(this.state, 'api end');
    
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
