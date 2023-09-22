import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Dashboard from 'page/Dashboard';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mt-20">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
