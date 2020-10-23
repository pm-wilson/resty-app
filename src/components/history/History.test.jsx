import React from 'react';
import { render, cleanup } from '@testing-library/react';
import History from './History';

describe('History component', () => {
  const data = [
    {
      key: '10/22/20',
      url: 'futuramaapi.herokuapp.com/api/v2/characters',
      method: 'GET',
    }, {
      key: '10/23/20',
      url: 'futuramaapi.herokuapp.com/api/quotes',
      method: 'GET'
    },
  ];

  afterEach(() => cleanup());
  it('renders History', () => {
    const { asFragment } = render(<History history={data}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
