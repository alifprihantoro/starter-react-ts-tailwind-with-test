import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './';
import '@testing-library/jest-dom';

it('testing test react js', () => {
  render(<Home />);
  const msg = {
    github: screen.getByText(/github/i),
    welcome: screen.getByText(/Welcome to React JS!/i)
  };
  const el = {
    github: {
      link: screen.getByTestId('github-href'),
      button: screen.getByTestId('github-btn')
    }
  };
  expect(msg.github).toBeInTheDocument();
  expect(msg.welcome).toBeInTheDocument();
  expect(el.github.button).toHaveClass('bg-blue-900');
  expect(el.github.button).toHaveTextContent(/github/i);
});
