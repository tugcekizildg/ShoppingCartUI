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
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className='flex items-center cursor-pointer'>
          <FaShoppingCart className='text-2xl text-gray-700 cursor-pointer' />
          {itemCount > 0 && (
            <span className='absolute -top-2 -right-2 bg-fuchsia-400 text-white rounded-full w-5 h-5 flex items-center justify-center'>
              {itemCount}
            </span>
          )}
        </button>
        {showDropdown && (
          <div className='absolute right-0 mt-2 w-72 bg-white border border-blue-400 rounded-md shadow-md z-10'>
            <div className='p-4'>
              <h2 className='text-lg text-blue-500 font-semibold mb-2'>
                Cart Items
              </h2>
              {cart.length === 0 ? (
                <p className='text-gray-600 text-sm'>Your cart is empty.</p>
              ) : (
                <>
                  <ul className='max-h-60 overflow-y-auto divide-y divide-gray-200'>
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className='flex justify-between items-center py-2'>
                        <div>
                          <p className='font-semibold'>{item.name}</p>
                          <p className='text-sm text-gray-500'>
                            {item.quantity} x ${item.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className='mt-4 flex justify-between'>
                    <p className='font-semibold'>Total:</p>
                    <p className='font-semibold'>${total}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
