import React, { Component } from 'react';
import Input from '../input/Input';
import Output from '../output/Output';
import History from '../history/History';

class Brain extends Component {
  state = {
    history: [],
    key: '',
    url: '',
    method: '',
  }

  onChange = () => {

  }

  onSubmit = () => {
    //hit api
  }

  render() {
    return (
      <div>
        <Input />
        <Output />
        <History history={this.state.history}/>
      </div>
    );
  }
}

export default Brain;
