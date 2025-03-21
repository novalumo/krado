import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar } from './avatar';

describe('Avatar', () => {
  const defaultProps = {
    url: 'https://example.com/avatar.jpg',
  };

  it('renders image with correct src and alt', () => {
    render(<Avatar {...defaultProps} />);
    const img = screen.getByAltText('Avatar');
    expect(img).toHaveAttribute('src', defaultProps.url);
  });

  it('applies default blue variant styles', () => {
    render(<Avatar {...defaultProps} />);
    const container = screen.getByAltText('Avatar').parentElement;
    expect(container).toHaveClass('border-blue-500', 'bg-blue-500');
  });

  describe('variant styles', () => {
    const variants = ['blue', 'green', 'red', 'yellow'] as const;

    variants.forEach((variant) => {
      it(`applies correct styles for ${variant} variant`, () => {
        render(<Avatar {...defaultProps} variant={variant} />);
        const container = screen.getByAltText('Avatar').parentElement;
        expect(container).toHaveClass(
          `border-${variant}-500`,
          `bg-${variant}-500`,
        );
      });
    });
  });

  it('applies base container styles', () => {
    render(<Avatar {...defaultProps} />);
    const container = screen.getByAltText('Avatar').parentElement;
    // ベースのスタイルを個別にチェック
    [
      'relative',
      'inline-block',
      'rounded-full',
      'overflow-hidden',
      'border-4',
      'shadow-lg',
    ].forEach((className) => {
      expect(container).toHaveClass(className);
    });
  });

  it('applies image styles', () => {
    render(<Avatar {...defaultProps} />);
    const img = screen.getByAltText('Avatar');
    expect(img).toHaveClass('h-full', 'w-full', 'object-cover');
  });

  it('applies custom className', () => {
    const customClass = 'custom-test-class';
    render(<Avatar {...defaultProps} className={customClass} />);
    const container = screen.getByAltText('Avatar').parentElement;
    expect(container).toHaveClass(customClass);
  });

  it('combines variant styles with custom className', () => {
    const customClass = 'custom-test-class';
    render(
      <Avatar {...defaultProps} variant="green" className={customClass} />,
    );
    const container = screen.getByAltText('Avatar').parentElement;
    expect(container).toHaveClass(
      'border-green-500',
      'bg-green-500',
      customClass,
    );
  });

  it('maintains base styles when applying custom className', () => {
    const customClass = 'custom-test-class';
    render(<Avatar {...defaultProps} className={customClass} />);
    const container = screen.getByAltText('Avatar').parentElement;
    expect(container).toHaveClass(
      'relative',
      'inline-block',
      'rounded-full',
      'overflow-hidden',
      customClass,
    );
  });
});
