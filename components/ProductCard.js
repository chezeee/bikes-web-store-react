export default function ProductCard({ item }) {
  const { brand, model } = item;
  return (
    <>
      <div style={{ border: '1px solid black' }}>
        <img src="" alt="Изображение товара" />
        <div>Бренд: {brand}</div>
        <div>Модель: {model}</div>
        <button>Добавить в корзину</button>
      </div>
    </>
  );
}
