import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { Button, Spinner, User } from '@nextui-org/react';
import { nanoid } from 'nanoid';
import { Pagination } from '@nextui-org/react';
import ReviewSubmit from './ReviewSubmit';
import useSWR from 'swr';
import css from './Reviews.module.css';

export default function Reviews({ pageSize }) {
  const { data: session, status } = useSession(),
    fetcher = (...args) =>
      fetch(...args).then((res) => {
        setAnimate(true);
        return res.json();
      }),
    { data, error, isLoading, mutate } = useSWR(
      'http://localhost:5000/reviews',
      fetcher
    ),
    [newReviewText, setNewReviewText] = useState(''),
    [animate, setAnimate] = useState(false),
    setNewReview = (text) => setNewReviewText(text),
    [currentPage, setCurrentPage] = useState(1),
    totalPages = data && Math.ceil(data.length / pageSize),
    startIndex = (currentPage - 1) * pageSize,
    endIndex = startIndex + pageSize,
    paginatedData = data && data.slice(startIndex, endIndex),
    onChange = (page) => {
      setCurrentPage(page);
    };

  if (error) {
    console.error(error);
  }

  if (isLoading) return <Spinner size="lg" color="primary" />;

  const handleNewReviewSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        id: nanoid(),
        user: {
          name: session.user.name,
          avatar: session.user.image,
        },
        text: newReviewText,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      mutate();
      setNewReviewText('');
    }
  };

  if (status === 'loading') {
    return <Spinner size="lg" color="primary" />;
  }

  if (data) {
    return (
      <div className={css['main-content']}>
        <h2>Отзывы о BikesWebStore</h2>
        <div className={css['reviewsContainer']}>
          {paginatedData.map((review, index) => (
            <div
              key={index}
              className={`${css.review} ${
                index % 2 === 0 ? css.left : css.right
              }`}
            >
              <div
                className={`${css.reviewContent} ${animate ? css.animate : ''}`}
              >
                <b>
                  <User
                    name={review.user.name}
                    avatarProps={{ src: review.user.avatar }}
                  />
                </b>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
          {totalPages > 1 && (
            <Pagination
              total={totalPages}
              initialPage={currentPage}
              onChange={onChange}
              className={css.pagination}
            />
          )}
        </div>
        {session ? (
          <ReviewSubmit
            handleNewReviewSubmit={handleNewReviewSubmit}
            newReview={newReviewText}
            setNewReview={setNewReview}
          />
        ) : (
          <div className={css['reviews-login']}>
            <p>
              Авторизуйтесь, чтобы у Вас появилась возможность оставить свой
              отзыв о нас.
            </p>
            <Button onClick={() => signIn()}>Войти</Button>
          </div>
        )}
      </div>
    );
  }
}
