import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import '../pages.scss';
import { RepoContext } from '../../App';

const RepoPage = () => {
  let { id } = useParams();
  const repo = useContext(RepoContext);

  return (
    <div className="main_container row">
      <div className="col">
        <img
          src={repo[id].owner.avatar_url}
          alt="owner"
          className="owner_img"
        />
        <p>Verified by GitHub</p>
        <p>
          GitHub confirms that this app meets the requirements for verification.
        </p>
      </div>
      <div className="col">
        <code>Application</code>
        <p>{repo[id].html_url}</p>
        <h1>{repo[id].name}</h1>
        <p>{repo[id].description}</p>
        <p>{repo[id].created_at}</p>
        <p>{repo[id].open_issues}</p>
        <p>{repo[id].watchers}</p>
      </div>
    </div>
  );
};

export default RepoPage;
