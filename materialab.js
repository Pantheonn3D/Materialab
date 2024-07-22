import React from 'react';
import { Gift, ShoppingCart, Search, Menu } from 'lucide-react';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
    <div className="flex items-center space-x-2">
      <Gift className="text-teal-400" size={24} />
      <span className="text-xl font-bold">ShopEase</span>
    </div>
    <nav className="hidden md:flex space-x-4">
      <a href="#" className="text-gray-300 hover:text-white">Home</a>
      <a href="#" className="text-gray-300 hover:text-white">Products</a>
      <a href="#" className="text-gray-300 hover:text-white">Categories</a>
      <a href="#" className="text-gray-300 hover:text-white">Deals</a>
    </nav>
    <div className="flex items-center space-x-4">
      <button className="p-2 text-gray-300 hover:text-white">
        <Search size={20} />
      </button>
      <button className="p-2 text-gray-300 hover:text-white">
        <ShoppingCart size={20} />
      </button>
      <button className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">Sign In</button>
      <button className="md:hidden text-white">
        <Menu size={24} />
      </button>
    </div>
  </header>
);

const Hero = () => (
  <div className="relative bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Summer Sale: Up to 50% Off</h1>
      <p className="text-xl mb-8">Discover amazing deals on all your favorite products.</p>
      <button className="px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">Shop Now</button>
    </div>
  </div>
);

const ProductCard = ({ name, price, imageUrl }) => (
  <div className="bg-gray-700 rounded-lg shadow-md overflow-hidden w-48 flex flex-col">
    <div className="h-48 overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-sm font-semibold mb-1 flex-grow text-white">{name}</h3>
      <p className="text-gray-300 text-sm mb-2">${price.toFixed(2)}</p>
      <button className="w-full px-2 py-1 bg-teal-600 text-white text-sm rounded hover:bg-teal-700 transition">
        Add to Cart
      </button>
    </div>
  </div>
);

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Wireless Earbuds", price: 79.99, imageUrl: "/api/placeholder/200/200" },
    { id: 2, name: "Smart Watch", price: 199.99, imageUrl: "/api/placeholder/200/200" },
    { id: 3, name: "Portable Charger", price: 49.99, imageUrl: "/api/placeholder/200/200" },
    { id: 4, name: "Bluetooth Speaker", price: 89.99, imageUrl: "/api/placeholder/200/200" },
    { id: 5, name: "Fitness Tracker", price: 59.99, imageUrl: "/api/placeholder/200/200" },
    { id: 6, name: "Noise-Canceling Headphones", price: 149.99, imageUrl: "/api/placeholder/200/200" },
    { id: 7, name: "Wireless Mouse", price: 29.99, imageUrl: "/api/placeholder/200/200" },
    { id: 8, name: "Portable SSD", price: 89.99, imageUrl: "/api/placeholder/200/200" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    "Electronics", "Clothing", "Home & Garden", "Sports & Outdoors"
  ];

  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-white">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <button key={category} className="p-4 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition">
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Newsletter = () => (
  <div className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Get the latest updates on new products and upcoming sales</p>
      <form className="max-w-md mx-auto flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-2 rounded-l text-gray-800"
        />
        <button className="px-4 py-2 bg-teal-600 rounded-r hover:bg-teal-700 transition">
          Subscribe
        </button>
      </form>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Products</a></li>
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Categories</a></li>
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Deals</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Contact Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-teal-400">FAQs</a></li>
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Shipping</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Our Story</a></li>
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:text-teal-400">Press</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-teal-400">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-teal-400">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-teal-400">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>&copy; 2024 ShopEase. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <ProductGrid />
      </div>
      <CategorySection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;