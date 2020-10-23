import React, { Component } from 'react';
import Input from '../input/Input';
import Output from '../output/Output';
import History from '../history/History';

class Brain extends Component {
  state = {
    history: [],
    url: '',
    method: 'GET',
    text: {},
    body: '',
  }

  onChange = () => {
    //update url, body and method
  }

  onSubmit = () => {
    //add info to history, hit api, update text
  }

  render() {
    return (
      <div>
        <Input url={this.state.url} body={this.state.body} onChange={this.onChange} onSubmit={this.onSubmit} />
        <Output text={this.state.text} />
        <History history={this.state.history} />
      </div>
    );
  }
}

export default Brain;
