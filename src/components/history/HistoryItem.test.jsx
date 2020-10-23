import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  const data = {
    url: 'www.google.com',
    key: '10/22/2020',
    method: 'POST',
  };

  afterEach(() => cleanup());
  it('renders HistoryItem', () => {
    const { asFragment } = render(<HistoryItem url={data.url} key={data.key} method={data.method}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
