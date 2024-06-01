import { beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App.tsx';

describe('App', () => {
  beforeEach(() => {
    cleanup();
  });

  it('タイトルが表示されていること', async () => {
    render(<App />);

    const heading = screen.getByRole('heading');

    expect(heading.textContent).toBe('Vite + React + Vitest');
  });

  it('ボタンをクリックしたカウントアップされること', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.getByText('Count is 1')).not.toBeNull();
  });
});
