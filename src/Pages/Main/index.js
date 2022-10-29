import axios from 'axios';
import { useState } from 'react';
import { RepoCard } from '../../Components';
import '../pages.scss';

const MainPage = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [repo, setRepo] = useState([]);

  const submitEvent = () => {
    console.log('On Submit Event');
    axios
      .get(`https://api.github.com/users/${githubUsername}/repos`)
      .then((res) => {
        console.log(res.data);
        setRepo(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main_container">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={githubUsername}
        onChange={(e) => setGithubUsername(e.target.value)}
      />
      <button onClick={submitEvent}>Submit</button>

      {repo !== []
        ? repo.map((data, id) => (
            <RepoCard
              key={id}
              description={data.description}
              name={data.name}
              ownerImg={data.owner.avatar_url}
              arrId={id}
              username={githubUsername}
            />
          ))
        : null}
    </div>
  );
};

export default MainPage;
