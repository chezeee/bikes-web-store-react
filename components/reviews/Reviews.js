import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { Button, Spinner, User } from '@nextui-org/react';
import css from './Reviews.module.css';
import { nanoid } from 'nanoid';
import { Pagination } from '@nextui-org/react';
import ReviewSubmit from './ReviewSubmit';

export default function Reviews({ pageSize }) {
  const { data: session, status } = useSession(),
    [reviews, setReviews] = useState([]),
    [newReviewText, setNewReviewText] = useState(''),
    [animate, setAnimate] = useState(false),
    setNewReview = (text) => setNewReviewText(text),
    [currentPage, setCurrentPage] = useState(1),
    totalPages = Math.ceil(reviews.length / pageSize),
    startIndex = (currentPage - 1) * pageSize,
    endIndex = startIndex + pageSize,
    paginatedData = reviews.slice(startIndex, endIndex),
    onChange = (page) => {
      setCurrentPage(page);
    };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviews`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    getReviews();
    setAnimate(true);
  }, []);

  if (!reviews) {
    return <Spinner size="lg" color="primary" />;
  }
  //не удалять комментарий
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     const res = await fetch('/api/reviews');
  //     const data = await res.json();
  //     setReviews(data);
  //   };

  //   fetchReviews();
  // }, []);
  //не удалять комментарий

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
      const newReview = await res.json();
      setReviews([...reviews, newReview]);
      setNewReviewText('');
    }
  };

  if (status === 'loading') {
    return <Spinner size="lg" color="primary" />;
  }

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
            Авторизуйтесь, чтобы у Вас появилась возможность оставить свой отзыв
            о нас.
          </p>
          <Button onClick={() => signIn()}>Войти</Button>
        </div>
      )}
    </div>
  );
}
