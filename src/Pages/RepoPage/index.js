import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../pages.scss';
import axios from 'axios';

const RepoPage = () => {
  let { username, id } = useParams();
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        console.log(res.data[id]);
        setRepo(res.data[id]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main_container row">
      <div className="col">
        <img src={repo.owner.avatar_url} alt="owner" className="owner_img" />
        <p>Verified by GitHub</p>
        <p>
          GitHub confirms that this app meets the requirements for verification.
        </p>
      </div>
      <div className="col">
        <code>Application</code>
        <p>{repo.html_url}</p>
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
        <p>{repo.created_at}</p>
        <p>{repo.open_issues}</p>
        <p>{repo.watchers}</p>
      </div>
    </div>
  );
};

export default RepoPage;
