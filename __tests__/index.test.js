import { getStaticProps} from '@/pages/posts';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        posts: [{ id: 1, title: 'Fetched Post' }],
      }),
  })
);

test('getStaticProps returns posts', async () => {
  const result = await getStaticProps();
  expect(result).toEqual({
    props: {
      posts: [{ id: 1, title: 'Fetched Post' }],
    },
  });
});
