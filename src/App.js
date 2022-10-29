import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './Pages';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
