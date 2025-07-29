import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className='bg-white p-4 rounded-lg shadow-md border-l-2 border-r-2 border-blue-400 flex flex-col'>
      <img
        src={product.image}
        alt={product.name}
        className='h-60 object-cover mb-4'
      />
      <h2 className='text-xl font-bold text-gray-600 mb-1'>{product.name}</h2>
      <p className='text-sm text-gray-600 mb-2 font-semibold'>
        {product.description}
      </p>
      <p className='text-sm text-gray-600'>
        <strong className='text-blue-400'>Category:</strong> {product.category}
      </p>
      <p className='text-sm text-gray-600'>
        <strong className='text-blue-400'>Price:</strong> $
        {product.price.toFixed(2)}
      </p>
      <button
        onClick={() => addToCart(product)}
        className='bg-blue-500 text-white mt-3 mb-3 px-4 py-2 rounded cursor-pointer hover:bg-blue-600'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
