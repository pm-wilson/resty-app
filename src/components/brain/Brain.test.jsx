import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Brain from './Brain';

describe('Brain container', () => {
  it('displays the greeting', () => {
    render(<Brain />);

    const urlInput = screen.getByLabelText('greeting');

    fireEvent.change(urlInput, {
      target: { value: 'www.google.com' }
    });

    return waitFor(() => {
      expect(urlInput).toHaveTextContent('www.google.com');
    });
  });
});
