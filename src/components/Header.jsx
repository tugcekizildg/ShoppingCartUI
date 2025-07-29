import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
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
