import { Button, Textarea } from '@nextui-org/react';

export default function ReviewSubmit({
  handleNewReviewSubmit,
  setNewReview,
  newReview,
}) {
  return (
    <form onSubmit={handleNewReviewSubmit}>
      <Textarea
        variant="bordered"
        label="Нам очень важно Ваше мнение о нас. Пожалуйста, оставьте отзыв о нашем магазине."
        labelPlacement="outside"
        placeholder="Оставьте свой отзыв о нас..."
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        value={newReview}
        onChange={(evt) => setNewReview(evt.target.value)}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
}
