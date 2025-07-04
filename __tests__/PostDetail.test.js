import { render, screen, fireEvent } from '@testing-library/react';
import PostDetail from '@/pages/components/PostDetail';

const mockPost = {
  id: 1,
  title: 'Detail Title',
  author: 'Adarsh',
  content: 'This is the content.',
  tags: ['React', 'Testing'],
  published_at: '2025-07-01T10:00:00Z',
};

test('renders post details correctly', () => {
  render(<PostDetail post={mockPost} onClose={jest.fn()} />);
  expect(screen.getByText('Detail Title')).toBeInTheDocument();
  expect(screen.getByText(/Adarsh/)).toBeInTheDocument();
  expect(screen.getByText(/This is the content./)).toBeInTheDocument();
  expect(screen.getByText('#React')).toBeInTheDocument();
  expect(screen.getByText('#Testing')).toBeInTheDocument();
});

test('calls onClose when close button is clicked', () => {
  const onClose = jest.fn();
  render(<PostDetail post={mockPost} onClose={onClose} />);
  fireEvent.click(screen.getByLabelText('Close modal'));
  expect(onClose).toHaveBeenCalled();
});
