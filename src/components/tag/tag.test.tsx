import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Tag } from './tag';

describe('Tag', () => {
  const defaultProps = {
    id: 'test-id',
    name: 'Test Tag',
  };

  it('renders tag with correct name', () => {
    render(<Tag {...defaultProps} />);
    const tag = screen.getByText('Test Tag');
    expect(tag).toBeInTheDocument();
  });

  it('applies default styles', () => {
    render(<Tag {...defaultProps} />);
    const tag = screen.getByText('Test Tag');
    expect(tag).toHaveClass(
      'inline-block',
      'rounded',
      'bg-gray-200',
      'px-3',
      'py-0.5',
      'font-bold',
      'text-gray-800',
    );
  });

  it('applies custom className', () => {
    const customClass = 'custom-test-class';
    render(<Tag {...defaultProps} className={customClass} />);
    const tag = screen.getByText('Test Tag');
    expect(tag).toHaveClass(customClass);
    // デフォルトのクラスも保持されていることを確認
    expect(tag).toHaveClass('bg-gray-200', 'text-gray-800');
  });

  it('uses id as key prop', () => {
    render(<Tag {...defaultProps} />);
    const tag = screen.getByText('Test Tag');
    expect(tag).toHaveAttribute('key', 'test-id');
  });

  it('renders as a span element', () => {
    render(<Tag {...defaultProps} />);
    const tag = screen.getByText('Test Tag');
    expect(tag.tagName).toBe('SPAN');
  });
});
