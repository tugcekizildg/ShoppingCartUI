import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <header className='max-w-md bg-white mb-4 rounded-md shadow-md p-4 flex justify-between items-center'>
      <h1 className='text-2xl text-blue-500 font-bold'>Cart</h1>
      <div className='relative'>
        <FaShoppingCart className='text-2xl text-gray-700 cursor-pointer' />
        {itemCount > 0 && (
          <span className='absolute -top-2 -right-2 bg-fuchsia-400 text-white rounded-full w-5 h-5 flex items-center justify-center'>
            {itemCount}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
