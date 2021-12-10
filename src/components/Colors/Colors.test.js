import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Colors from './Colors';

describe('<Colors />', () => {
  test('it should mount', () => {
    render(<Colors />);
    
    const colors = screen.getByTestId('Colors');

    expect(colors).toBeInTheDocument();
  });
});