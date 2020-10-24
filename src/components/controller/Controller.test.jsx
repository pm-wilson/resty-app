import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Controller from './Controller';

describe('Controller container', () => {
  it('displays the greeting', () => {
    render(<Controller />);

    const urlInput = screen.getByLabelText('greeting');

    fireEvent.change(urlInput, {
      target: { value: 'www.google.com' }
    });

    return waitFor(() => {
      expect(urlInput).toHaveTextContent('www.google.com');
    });
  });
});
