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
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter the username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="btn" onClick={showRepositories}>
        Submit
      </button>

      {userData !== null ? (
        <div className="user_container">
          <img
            className="user_image"
            src={userData.avatar_url}
            alt="user img"
          />
          <div>
            <h1 className="user_name">{userData.name}</h1>
            <p className="user_bio">{userData.bio}</p>
            <p className="user_follower">
              Number of followers: <span>{userData.followers}</span>
            </p>
            <br />
            <Link to={`/followers/${username}`}>Show Followers</Link>
          </div>
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
