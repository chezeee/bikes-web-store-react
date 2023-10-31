import { useState, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { Button, Spinner } from '@nextui-org/react';

export default function Reviews() {
  const { data: session, status } = useSession(),
    [reviews, setReviews] = useState([]),
    [newReviewText, setNewReviewText] = useState('');

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
      // setNewReviewText('');
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div>
        <h1>Отзывы о нас</h1>

        {reviews.map((review, index) => (
          <div key={index}>
            <img src={review.user.avatar} alt={review.user.name} />
            <p>{review.text}</p>
          </div>
        ))}

        <form onSubmit={handleNewReviewSubmit}>
          <textarea
            value={newReviewText}
            onChange={(evt) => setNewReviewText(evt.target.value)}
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    );
  }
  return (
    <div>
      <h1>Отзывы о нас</h1>

      {reviews.map((review, index) => (
        <div key={index}>
          <img src={review.user.avatar} alt={review.user.name} />
          <p>{review.text}</p>
        </div>
      ))}
      <div>
        <p>You need to sign in to leave a review.</p>
        <Button onClick={() => signIn()}>Sign in</Button>
      </div>
    </div>
  );
}
