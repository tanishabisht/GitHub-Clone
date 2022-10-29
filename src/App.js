import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainPage, RepoPage } from './Pages';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:username/:id" element={<RepoPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
