import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '@nextui-org/react';
import ProductDetails from '@/components/content/catalog/ProductDetails';
import Nav from '@/components/nav/Nav';

export default function ProductPage() {
  const router = useRouter(),
    { id } = router.query,
    [product, setProduct] = useState(null);

  useEffect(() => {
    const getItemById = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    getItemById();
  }, [id]);

  if (!product) {
    return <Spinner size="lg" color="primary" />;
  }

  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="mainContainer">
        <main>
          <ProductDetails product={product} />
        </main>
      </section>
    </>
  );
}
