import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  Lock, 
  User, 
  Mail, 
  MapPin, 
  Phone,
  Check,
  ArrowLeft,
  Package,
  Truck
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    // Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    
    // Payment Info
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Options
    shippingMethod: 'standard',
    saveInfo: false
  });

  const shippingCost = formData.shippingMethod === 'express' ? 50 : 15;
  const taxRate = 0.08;
  const subtotal = getCartTotal();
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingCost;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setOrderComplete(true);
    clearCart();

    // Redirect to home after 5 seconds
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (cartItems.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-raised p-12"
          >
            <div className="neu-card p-6 rounded-full inline-block mb-6">
              <Package className="w-16 h-16 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">
              Add some artworks to your cart before checking out
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/shop')}
              className="neu-button"
            >
              Browse Shop
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="neu-card-raised p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="neu-card p-6 rounded-full inline-block mb-6 bg-gradient-to-br from-primary-cyan/20 to-primary-teal/20"
            >
              <Check className="w-16 h-16 text-primary-cyan" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4 gradient-text">
              Order Confirmed!
            </h2>
            <p className="text-gray-400 mb-2">
              Thank you for your purchase. Your order has been successfully processed.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Order confirmation sent to {formData.email}
            </p>
            <div className="glass-card p-4 mb-6">
              <p className="text-sm text-gray-400 mb-1">Order Number</p>
              <p className="text-lg font-bold text-primary-cyan">
                #LG{Math.floor(Math.random() * 1000000)}
              </p>
            </div>
            <p className="text-xs text-gray-500">
              Redirecting to home page...
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/shop')}
            className="flex items-center space-x-2 text-gray-400 hover:text-primary-cyan transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Shop</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Checkout</span>
          </h1>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="neu-card-raised p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <User className="w-6 h-6 text-primary-cyan" />
                  <span>Contact Information</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="neu-input"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="neu-input"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="neu-input"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="neu-input"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="neu-card-raised p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-primary-cyan" />
                  <span>Shipping Address</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="neu-input"
                      placeholder="123 Main Street, Apt 4B"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="neu-input"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="neu-input"
                        placeholder="NY"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="neu-input"
                        placeholder="10001"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="neu-input"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>United Kingdom</option>
                        <option>Australia</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Shipping Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="neu-card-raised p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Truck className="w-6 h-6 text-primary-cyan" />
                  <span>Shipping Method</span>
                </h2>
                <div className="space-y-4">
                  <label className="glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-primary-cyan/5 transition-colors">
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="standard"
                        checked={formData.shippingMethod === 'standard'}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-cyan"
                      />
                      <div>
                        <p className="font-semibold">Standard Shipping</p>
                        <p className="text-sm text-gray-400">5-7 business days</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary-cyan">$15.00</span>
                  </label>
                  <label className="glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-primary-cyan/5 transition-colors">
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="express"
                        checked={formData.shippingMethod === 'express'}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-cyan"
                      />
                      <div>
                        <p className="font-semibold">Express Shipping</p>
                        <p className="text-sm text-gray-400">2-3 business days</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary-cyan">$50.00</span>
                  </label>
                </div>
              </motion.div>

              {/* Payment Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="neu-card-raised p-8"
              >
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <CreditCard className="w-6 h-6 text-primary-cyan" />
                  <span>Payment Information</span>
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      required
                      className="neu-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                      maxLength="19"
                      className="neu-input"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        required
                        maxLength="5"
                        className="neu-input"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                        maxLength="4"
                        className="neu-input"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div className="glass-card p-4 flex items-center space-x-3 text-sm text-gray-400">
                    <Lock className="w-5 h-5 text-primary-cyan flex-shrink-0" />
                    <p>Your payment information is secure and encrypted</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="neu-card-raised p-8 sticky top-24"
              >
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex space-x-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary-cyan rounded-full flex items-center justify-center text-xs font-bold">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                        <p className="text-xs text-gray-400">{item.artist}</p>
                        <p className="text-sm text-primary-cyan font-bold mt-1">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 py-6 border-t border-primary-cyan/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Shipping</span>
                    <span className="font-semibold">${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between text-xl font-bold py-6 border-t border-primary-cyan/10">
                  <span>Total</span>
                  <span className="gradient-text text-3xl">${total.toFixed(2)}</span>
                </div>

                {/* Place Order Button */}
                <motion.button
                  type="submit"
                  disabled={isProcessing}
                  whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                  whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                  className={`w-full neu-button py-4 flex items-center justify-center space-x-2 ${
                    isProcessing ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-cyan border-t-transparent rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      <span>Place Order</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </p>
              </motion.div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
