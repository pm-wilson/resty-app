import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Output from './Output';

describe('Output component', () => {
  const jsonObject = { name:'John', age:30, car:'honda' };

  afterEach(() => cleanup());
  it('renders Output', () => {
    const { asFragment } = render(<Output text={jsonObject}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
