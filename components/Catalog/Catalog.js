import ProductCard from './ProductCard';
import css from './Catalog.module.css';
import { data } from '../../context/products';

export default function Catalog() {
  return (
    <div className={css['products-container']}>
      {data.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
}
