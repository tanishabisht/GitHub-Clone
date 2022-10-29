import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainPage, RepoPage, FollowersPage } from './Pages';
import { useState, createContext } from 'react';
import axios from 'axios';

export const RepoContext = createContext();
export const UserDataContext = createContext();

function App() {
  const [username, setUsername] = useState('');
  const [repo, setRepo] = useState([]);
  const [userData, setUserData] = useState(null);

  const showRepositories = () => {
    console.log('On Submit Event');
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        console.log(res.data);
        setRepo(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserDataContext.Provider value={userData}>
      <RepoContext.Provider value={repo}>
        <HashRouter>
          <div className="app">
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    username={username}
                    setUsername={setUsername}
                    showRepositories={showRepositories}
                    repo={repo}
                  />
                }
              />
              <Route path="/:username/:id" element={<RepoPage />} />
              <Route path="/followers/:username" element={<FollowersPage />} />
            </Routes>
          </div>
        </HashRouter>
      </RepoContext.Provider>
    </UserDataContext.Provider>
  );
}

export default App;
