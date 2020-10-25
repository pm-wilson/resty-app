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
  setUnloading = () => setTimeout(() => this.setState({ loading: false }), 2000)

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  updateHistory = newHistoryItem => {
    const newHistoryItemData = newHistoryItem;
    const now = new Date().toString();
    const newHistory = this.state.history;

    newHistoryItemData.date = now;
    newHistory.push(newHistoryItemData);
    this.setState({ history: newHistory }); 
  }

  updateText = newText => {
    this.setState({ text: newText });
  }

  fetchApi = (url, method, body) => {
    return hitApi(url, method, body)
      .then(res => this.updateText(res));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { url, method, body } = this.state;

    if(!this.state.loading) {
      this.setLoading();
      this.updateHistory({ url, method, body, });
      this.fetchApi(url, method, body);
      this.setUnloading();
    }

    console.log(this.state, 'state');
  }

  findBody = (date) => {
    const dateData = this.state.history.filter(historyData => historyData.date === date);

    return dateData[0].body;
  }

  historyClick = e => {
    e.preventDefault();

    const clickedInfo = e.target.parentElement.innerHTML;
    const splitInfo = clickedInfo.split('<span>');
    const splitInfo2 = splitInfo.join('').split('</span>');
    const historyMethod = splitInfo2[1];
    const historyUrl = splitInfo2[2];
    const historyBody = this.findBody(splitInfo2[0]);

    if(!this.state.loading) {
      this.setState({ method: historyMethod, url: historyUrl, body: historyBody });
      this.handleSubmit(e);
    }
  }

  render() {
    return (
      <div>
        <Input url={this.state.url} body={this.state.body} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Output url={this.state.url} text={this.state.text} />
        <History history={this.state.history} historyClick={this.historyClick} />
      </div>
    );
  }
}

export default Controller;
