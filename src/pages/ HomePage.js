import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {}
      <header className="bg-blue-800 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Brisphere</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-gray-300">Book Now</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {}
      <section className="flex-grow bg-blue-100 py-16 px-4 text-center">
        <h2 className="text-4xl font-semibold text-blue-800">Your Dream Workation Awaits</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Experience the perfect blend of work and leisure. Work remotely from the stunning landscapes of Ladakh, and recharge while doing it.
        </p>
        <Link to="/booking">
          <button className="mt-8 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-500">
            Book Your Stay Now
          </button>
        </Link>
      </section>

      {}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-blue-800">Why Choose Brisphere?</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Brisphere is not just a place to stay, it's a lifestyle. Enjoy high-speed internet, peaceful surroundings, and the best of Ladakh.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800">Work-Friendly</h4>
              <p className="text-gray-600 mt-2">Enjoy uninterrupted work with high-speed internet and all the necessary facilities.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800">Peaceful Environment</h4>
              <p className="text-gray-600 mt-2">Relax and recharge in the serene beauty of Ladakh after a long day of work.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-blue-800">Easy Booking</h4>
              <p className="text-gray-600 mt-2">Our simple and easy-to-use platform makes booking your stay quick and hassle-free.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <footer className="bg-blue-800 text-white py-6 text-center">
        <p>© 2024 Brisphere. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
