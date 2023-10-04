import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Confession from './components/Confession';
import Misdemeanour from './components/Misdemeanour';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/misdemeanour">Misdemeanours</Link>
                <Link to="/confession">Confess to Us</Link>
              </nav>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Home />} />
          <Route path="/confession" element={<Confession />} />
          <Route path="/misdemeanour" element={<Misdemeanour />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
