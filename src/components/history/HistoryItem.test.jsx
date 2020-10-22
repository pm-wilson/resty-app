import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryItem from './HistoryItem';

describe('HistoryItem component', () => {
  afterEach(() => cleanup());
  it('renders HistoryItem', () => {
    const { asFragment } = render(<HistoryItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
