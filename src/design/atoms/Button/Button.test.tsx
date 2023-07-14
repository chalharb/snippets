import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {

  test('renders Default variant', () => {
    render(<Button>Default</Button>);
    const linkElement = screen.getByText(/Default/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Primary variant', () => {
    render(<Button variant="primary">Primary</Button>);
    const linkElement = screen.getByText(/Primary/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const linkElement = screen.getByText(/Secondary/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Outline variant', () => {
    render(<Button variant="outline">Outline</Button>);
    const linkElement = screen.getByText(/Outline/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Disabled variant', () => {
    render(<Button disabled>Disabled</Button>);
    const linkElement = screen.getByText(/Disabled/i);
    expect(linkElement).toBeInTheDocument();
  });
});
