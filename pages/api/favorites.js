import { getSession } from 'next-auth/react';

// const reviews = [
//   {
//     user: {
//       name: 'John Doe1',
//       avatar: 'https://example.com/avatar.jpg',
//     },
//     text: 'Great store! Highly recommended.',
//   },
//   {
//     user: {
//       name: 'John Doe2',
//       avatar: 'https://example.com/avatar.jpg',
//     },
//     text: 'Great store! Highly recommended.',
//   },
//   {
//     user: {
//       name: 'John Doe3',
//       avatar: 'https://example.com/avatar.jpg',
//     },
//     text: 'Great store! Highly recommended.',
//   },
//   {
//     user: {
//       name: 'John Doe4',
//       avatar: 'https://example.com/avatar.jpg',
//     },
//     text: 'Great store! Highly recommended.',
//   },
//   {
//     user: {
//       name: 'John Doe5',
//       avatar: 'https://example.com/avatar.jpg',
//     },
//     text: 'Great store! Highly recommended.',
//   },
//   {
//     user: {
//       name: 'John Doe6',
//       avatar: 'https://example.com/avatar.jpg',
//     },
//     text: 'Great store! Highly recommended.',
//   },
// ];

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  if (req.method === 'GET') {
    res.status(200).json(reviews);
  } else if (req.method === 'POST') {
    const { text } = req.body;

    // Создайте новый отзыв, используя данные пользователя из сессии
    const newReview = {
      user: {
        name: session.user.name,
        avatar: session.user.image,
      },
      text,
    };

    reviews.push(newReview);
    res.status(201).json(newReview);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
