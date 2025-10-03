import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import VantaBackground from './components/VantaBackground';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <CartProvider>
        <VantaBackground>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Cart />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </VantaBackground>
      </CartProvider>
    </Router>
  );
}

export default App;
