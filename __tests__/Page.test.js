import { render, screen, waitFor } from '@testing-library/react';
import Page from '@/pages/posts';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        posts: [{ id: 1, title: 'Mocked Post' }],
      }),
  })
);

test('renders posts from mocked API', async () => {
  render(<Page posts={[{ id: 1, title: 'Mocked Post' }]} />);
  expect(await screen.findByText('Mocked Post')).toBeInTheDocument();
});
