import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Box } from './box';

describe('Box', () => {
  const defaultChildren = 'Test Content';

  it('renders children correctly', () => {
    render(<Box>{defaultChildren}</Box>);
    expect(screen.getByText(defaultChildren)).toBeInTheDocument();
  });

  it('renders as div by default with correct base styles', () => {
    render(<Box>{defaultChildren}</Box>);
    const box = screen.getByText(defaultChildren);
    expect(box.tagName).toBe('DIV');
    expect(box).toHaveClass('p-8', 'bg-white', 'rounded-lg');
  });

  it('renders with custom element tag', () => {
    render(<Box as="section">{defaultChildren}</Box>);
    const box = screen.getByText(defaultChildren);
    expect(box.tagName).toBe('SECTION');
  });

  it('applies custom className', () => {
    const customClass = 'custom-test-class';
    render(<Box className={customClass}>{defaultChildren}</Box>);
    const box = screen.getByText(defaultChildren);
    expect(box).toHaveClass(customClass);
    // 基本クラスも保持されていることを確認
    expect(box).toHaveClass('p-8', 'bg-white', 'rounded-lg');
  });

  it('applies custom styles', () => {
    const customStyle = {
      backgroundColor: 'rgb(255, 0, 0)',
      marginTop: '10px',
    };
    render(<Box style={customStyle}>{defaultChildren}</Box>);
    const box = screen.getByText(defaultChildren);
    Object.entries(customStyle).forEach(([key, value]) => {
      expect(box).toHaveStyle({ [key]: value });
    });
  });

  it('renders complex children correctly', () => {
    const complexChildren = (
      <>
        <h1>Title</h1>
        <p>Paragraph</p>
      </>
    );
    render(<Box>{complexChildren}</Box>);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });

  it('combines custom styles with base classes', () => {
    const customStyle = { color: 'rgb(0, 0, 255)' };
    const customClass = 'custom-class';
    render(
      <Box style={customStyle} className={customClass}>
        {defaultChildren}
      </Box>,
    );
    const box = screen.getByText(defaultChildren);
    expect(box).toHaveClass('p-8', 'bg-white', 'rounded-lg', customClass);
    Object.entries(customStyle).forEach(([key, value]) => {
      expect(box).toHaveStyle({ [key]: value });
    });
  });

  it('renders as different HTML elements', () => {
    const elements = ['article', 'main', 'aside', 'section'] as const;
    elements.forEach((element) => {
      const { unmount } = render(<Box as={element}>{defaultChildren}</Box>);
      const box = screen.getByText(defaultChildren);
      expect(box.tagName.toLowerCase()).toBe(element);
      unmount();
    });
  });
});
