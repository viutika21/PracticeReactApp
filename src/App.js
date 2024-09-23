// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './route-config'
import { Suspense } from 'react';
import Header from './Components/Header';

function App() {
  return (
    <Router>
      <div>      
        <Suspense fallback={<div>Loading....</div>}>   
        <Header/>     
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
