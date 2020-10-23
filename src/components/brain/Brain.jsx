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

  }

  onSubmit = () => {
    //hit api
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
