import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { NovalumoLogo } from './logo';

describe('NovalumoLogo', () => {
  it('renders SVG with default light variant', () => {
    render(<NovalumoLogo />);
    const svg = screen.getByTitle('Novalumo');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass(
      'w-32',
      'transition-all',
      'duration-300',
      'pointer-events-none',
      'print:invert-0',
    );
    expect(svg).not.toHaveClass('invert');
  });

  it('applies dark variant styles correctly', () => {
    render(<NovalumoLogo variant="dark" />);
    const svg = screen.getByTitle('Novalumo');
    expect(svg).toHaveClass('invert');
  });

  it('applies custom className', () => {
    const customClass = 'custom-test-class';
    render(<NovalumoLogo className={customClass} />);
    const svg = screen.getByTitle('Novalumo');
    expect(svg).toHaveClass(customClass);
  });

  it('has correct SVG attributes', () => {
    render(<NovalumoLogo />);
    const svg = screen.getByTitle('Novalumo');
    expect(svg).toHaveAttribute('version', '1.1');
    expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 918 162');
  });

  it('maintains accessibility with title element', () => {
    render(<NovalumoLogo />);
    const title = screen.getByText('Novalumo');
    expect(title.tagName).toBe('title');
    expect(title).toBeInTheDocument();
  });

  it('combines variant and custom classes correctly', () => {
    render(<NovalumoLogo variant="dark" className="custom-class" />);
    const svg = screen.getByTitle('Novalumo');
    expect(svg).toHaveClass('invert', 'custom-class', 'w-32');
  });
});
