import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartCount,
    isCartOpen,
    setIsCartOpen
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-primary-dark z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="glass-nav p-6 border-b border-primary-cyan/10">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <ShoppingBag className="w-6 h-6 text-primary-cyan" />
                    <span>Shopping Cart</span>
                  </h2>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 neu-card rounded-lg"
                  >
                    <X className="w-6 h-6 text-primary-cyan" />
                  </motion.button>
                </div>
                <p className="text-gray-400 text-sm">
                  {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in cart
                </p>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="neu-card-raised p-8 rounded-full mb-6">
                      <ShoppingBag className="w-16 h-16 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                    <p className="text-gray-400 mb-6">
                      Add some beautiful artworks to your collection
                    </p>
                    <Link to="/shop" onClick={() => setIsCartOpen(false)}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-button"
                      >
                        Browse Shop
                      </motion.button>
                    </Link>
                  </div>
                ) : (
                  <>
                    {cartItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                        className="neu-card-raised p-4"
                      >
                        <div className="flex space-x-4">
                          {/* Image */}
                          <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm truncate mb-1">
                              {item.title}
                            </h3>
                            <p className="text-xs text-gray-400 mb-2">
                              by {item.artist}
                            </p>
                            <p className="text-primary-cyan font-bold">
                              ${item.price.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 neu-card rounded-lg"
                            >
                              <Minus className="w-4 h-4 text-primary-cyan" />
                            </motion.button>
                            <span className="w-8 text-center font-semibold">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 neu-card rounded-lg"
                            >
                              <Plus className="w-4 h-4 text-primary-cyan" />
                            </motion.button>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 neu-card rounded-lg text-red-400 hover:text-red-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}
              </div>

              {/* Footer with Total and Checkout */}
              {cartItems.length > 0 && (
                <div className="glass-nav p-6 border-t border-primary-cyan/10 space-y-4">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-gray-400">Subtotal:</span>
                    <span className="font-bold gradient-text text-2xl">
                      ${getCartTotal().toLocaleString()}
                    </span>
                  </div>

                  {/* Shipping Note */}
                  <p className="text-xs text-gray-500 text-center">
                    Shipping and taxes calculated at checkout
                  </p>

                  {/* Checkout Button */}
                  <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full neu-button py-4 flex items-center justify-center space-x-2 text-lg font-semibold"
                    >
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>

                  {/* Continue Shopping */}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full text-center text-sm text-gray-400 hover:text-primary-cyan transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
