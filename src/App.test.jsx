import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import App from './App';

afterEach(() => vi.unstubAllGlobals());

test('renders the movie picker', () => {
  render(<App />);
  expect(screen.getByText('Which movie for tonight?')).toBeInTheDocument();
});

test('loads a movie and displays its details and IMDb link', async () => {
  const fetchMock = vi.fn().mockResolvedValue({
    json: async () => ({
      original_title: 'Test Movie', poster_path: '/poster.jpg',
      overview: 'A movie for tonight.', vote_average: 8,
      release_date: '2026-01-01', imdb_id: 'tt1234567',
      tagline: 'A test tagline', genres: [{ name: 'Drama' }],
    }),
  });
  vi.stubGlobal('fetch', fetchMock);
  render(<App />);
  fireEvent.click(screen.getByText('Which movie for tonight?'));
  expect(await screen.findByText('Test Movie')).toBeInTheDocument();
  expect(screen.getByText('Drama')).toBeInTheDocument();
  expect(screen.getByText('A movie for tonight.')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Read more/ })).toHaveAttribute(
    'href', 'https://www.imdb.com/title/tt1234567',
  );
  expect(fetchMock).toHaveBeenCalledOnce();
});
