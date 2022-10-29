import { RepoCard } from '../../Components';
import { UserDataContext } from '../../App';
import { useContext } from 'react';
import '../pages.scss';
import { Link } from 'react-router-dom';

const MainPage = (props) => {
  const { username, setUsername, showRepositories, repo } = props;
  const userData = useContext(UserDataContext);
  console.log(userData, 'userData');

  return (
    <div className="main_container">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={showRepositories}>Submit</button>

      {userData !== null ? (
        <div>
          <img src={userData.avatar_url} alt="user img" />
          <h1>{userData.name}</h1>
          <p>{userData.bio}</p>
          <p>Number of followers: {userData.followers}</p>
          <Link to={`/followers/${username}`}>Show Followers</Link>
        </div>
      ) : null}

      {repo !== []
        ? repo.map((data, id) => (
            <RepoCard
              key={id}
              description={data.description}
              name={data.name}
              ownerImg={data.owner.avatar_url}
              arrId={id}
              username={username}
            />
          ))
        : null}
    </div>
  );
};

export default MainPage;
