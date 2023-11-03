import { Button, Textarea } from '@nextui-org/react';
import css from './ReviewSubmit.module.css';

export default function ReviewSubmit({
  handleNewReviewSubmit,
  setNewReview,
  newReview,
}) {
  return (
    <form onSubmit={handleNewReviewSubmit} className={css['submit-form']}>
      <Textarea
        variant="bordered"
        label="Нам очень важно Ваше мнение о нас. Пожалуйста, оставьте отзыв о нашем магазине."
        labelPlacement="outside"
        placeholder="Оставьте свой отзыв о нас..."
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        value={newReview}
        onChange={(evt) => setNewReview(evt.target.value)}
      />
      <Button type="submit" color="primary">
        Отправить
      </Button>
    </form>
  );
}
