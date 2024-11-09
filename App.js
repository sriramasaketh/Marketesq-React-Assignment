import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import OrderSummary from './components/OrderSummary';

const App = () => {
  return (
    <Router>
      <div className="App">
        {}
        <Header />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            {}
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/order-summary" element={<OrderSummary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
