import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Apply from './components/Apply';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App