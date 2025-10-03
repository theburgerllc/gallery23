// src/components/PixelHero/PixelHero.test.jsx
// Basic test structure for PixelHero component
// Run with: npm test (if Vitest/Jest configured)

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import PixelHero from './PixelHero';

// Mock IntersectionObserver
beforeEach(() => {
  global.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  }));

  global.ResizeObserver = vi.fn().mockImplementation((callback) => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  }));
});

describe('PixelHero', () => {
  it('renders firstContent', () => {
    render(
      <PixelHero
        firstContent={<div>First Content</div>}
        secondContent={<div>Second Content</div>}
      />
    );
    expect(screen.getByText('First Content')).toBeInTheDocument();
  });

  it('renders secondContent in the DOM', () => {
    render(
      <PixelHero
        firstContent={<div>First Content</div>}
        secondContent={<div>Second Content</div>}
      />
    );
    expect(screen.getByText('Second Content')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(
      <PixelHero
        firstContent={<div>First</div>}
        secondContent={<div>Second</div>}
      />
    );
    const hero = screen.getByTestId('pixel-hero-root');
    expect(hero).toHaveAttribute('role', 'region');
    expect(hero).toHaveAttribute('aria-label', 'Pixel hero');
  });

  it('renders canvas when imageSrc is provided', () => {
    render(
      <PixelHero
        imageSrc="/images/hero-bg.webp"
        firstContent={<div>First</div>}
        secondContent={<div>Second</div>}
      />
    );
    expect(screen.getByTestId('pixel-canvas')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <PixelHero
        className="custom-class"
        firstContent={<div>First</div>}
        secondContent={<div>Second</div>}
      />
    );
    const hero = screen.getByTestId('pixel-hero-root');
    expect(hero.className).toContain('custom-class');
  });
});

// Note: Full tests would require:
// - @testing-library/react
// - vitest or jest
// - jsdom environment
// Run: npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
