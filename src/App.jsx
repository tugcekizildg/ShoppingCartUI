import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:8000/products');
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6'>🛒 Product Catalog</h1>
      {loading && <p>Loading...</p>}
      {error && <div className='error'>❌ {error}</div>}
      <ProductList products={products} />
    </div>
  );
};

export default App;
