// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Confession from './components/Confession';
import Misdemeanour from './components/Misdemeanour';
import NotFound from './components/NotFound';



const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/confession" element={<Confession />} />
          <Route path="/misdemeanour" element={<Misdemeanour />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
