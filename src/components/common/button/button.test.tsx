import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText('Default Button');
    expect(button).toHaveClass('bg-black', 'text-white', 'border-black');
  });

  it('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');
    expect(button).toHaveClass('bg-transparent', 'text-white', 'border-white');
  });

  it('applies danger variant styles', () => {
    render(<Button variant="danger">Danger Button</Button>);
    const button = screen.getByText('Danger Button');
    expect(button).toHaveClass('bg-red-500', 'text-white', 'border-red-500');
  });

  it('renders as a different element when "as" prop is provided', () => {
    render(
      <Button as="a" href="/test">
        Link Button
      </Button>,
    );
    const link = screen.getByText('Link Button');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/test');
  });

  it('adds external link attributes and icon for external URLs', () => {
    render(
      <Button as="a" href="https://example.com">
        External Link
      </Button>,
    );
    const link = screen.getByText('External Link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link.querySelector('svg')).toBeInTheDocument(); // external link icon
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByText('Custom Button');
    expect(button).toHaveClass('custom-class');
  });
});
