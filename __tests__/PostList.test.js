import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '@/pages/components/PostList';

const mockPosts = [
  { id: 1, title: 'Test Post 1' },
  { id: 2, title: 'Test Post 2' },
];

test('renders all post titles', () => {
  render(<PostList posts={mockPosts} onPostClick={jest.fn()} />);
  expect(screen.getByText('Test Post 1')).toBeInTheDocument();
  expect(screen.getByText('Test Post 2')).toBeInTheDocument();
});

test('calls onPostClick when a post is clicked', () => {
  const onPostClick = jest.fn();
  render(<PostList posts={mockPosts} onPostClick={onPostClick} />);
  fireEvent.click(screen.getByText('Test Post 1'));
  expect(onPostClick).toHaveBeenCalledWith(mockPosts[0]);
});
