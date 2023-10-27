import ProductCard from './ProductCard';
import css from './Catalog.module.css';

export default function Catalog({ data }) {
  return (
    <div className={css['products-container']}>
      {data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}
