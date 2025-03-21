import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Bubble } from './bubble';

describe('Bubble', () => {
  const defaultContent = 'Test Content';

  it('renders content correctly', () => {
    render(<Bubble content={defaultContent} />);
    expect(screen.getByText(defaultContent)).toBeInTheDocument();
  });

  it('applies default top-left direction styles', () => {
    render(<Bubble content={defaultContent} />);
    const bubble =
      screen.getByText(defaultContent).parentElement?.parentElement;
    expect(bubble).toHaveClass('before:top-[-1rem]', 'before:left-4');
    expect(bubble).toHaveClass(
      'before:[clip-path:polygon(50%_0,100%_100%,0_100%)]',
    );
  });

  describe('direction styles', () => {
    const directions = [
      'top-left',
      'top-right',
      'top-center',
      'bottom-left',
      'bottom-right',
      'bottom-center',
    ] as const;

    directions.forEach((direction) => {
      it(`applies correct styles for ${direction} direction`, () => {
        render(<Bubble content={defaultContent} direction={direction} />);
        const bubble =
          screen.getByText(defaultContent).parentElement?.parentElement;

        // Check if the correct direction-specific classes are applied
        if (direction.startsWith('top')) {
          expect(bubble).toHaveClass(
            'before:[clip-path:polygon(50%_0,100%_100%,0_100%)]',
          );
        } else {
          expect(bubble).toHaveClass(
            'before:[clip-path:polygon(0_0,100%_0,50%_100%)]',
          );
        }

        // Check position-specific classes
        if (direction === 'top-left') {
          expect(bubble).toHaveClass('before:top-[-1rem]', 'before:left-4');
        } else if (direction === 'top-right') {
          expect(bubble).toHaveClass('before:top-[-1rem]', 'before:right-4');
        } else if (direction === 'top-center') {
          expect(bubble).toHaveClass(
            'before:top-[-1rem]',
            'before:left-1/2',
            'before:-translate-x-1/2',
          );
        } else if (direction === 'bottom-left') {
          expect(bubble).toHaveClass('before:bottom-[-1rem]', 'before:left-4');
        } else if (direction === 'bottom-right') {
          expect(bubble).toHaveClass('before:bottom-[-1rem]', 'before:right-4');
        } else if (direction === 'bottom-center') {
          expect(bubble).toHaveClass(
            'before:bottom-[-1rem]',
            'before:left-1/2',
            'before:-translate-x-1/2',
          );
        }
      });
    });
  });

  it('applies common styles to bubble container', () => {
    render(<Bubble content={defaultContent} />);
    const bubble =
      screen.getByText(defaultContent).parentElement?.parentElement;
    expect(bubble).toHaveClass(
      'relative',
      'drop-shadow-lg',
      'before:content-[""]',
      'before:absolute',
      'before:z-0',
      'before:bg-white',
      'before:shadow',
      'before:w-8',
      'before:h-6',
    );
  });

  it('applies styles to content container', () => {
    render(<Bubble content={defaultContent} />);
    const contentContainer = screen.getByText(defaultContent).parentElement;
    expect(contentContainer).toHaveClass(
      'relative',
      'z-10',
      'rounded-lg',
      'bg-white',
      'p-5',
    );
  });

  it('applies custom className', () => {
    const customClass = 'custom-test-class';
    render(<Bubble content={defaultContent} className={customClass} />);
    const bubble =
      screen.getByText(defaultContent).parentElement?.parentElement;
    expect(bubble).toHaveClass(customClass);
  });
});
