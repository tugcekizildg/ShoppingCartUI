import ProductList from './components/ProductList';
import Header from './components/Header';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <Header />
      <h1 className='text-3xl font-bold mb-6'>🛒 Product Catalog</h1>
      <ProductList />
    </div>
  );
};

export default App;
