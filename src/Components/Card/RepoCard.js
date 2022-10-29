import { Link } from 'react-router-dom';
import './card.scss';

const RepoCard = (props) => {
  const { arrId, description, name, ownerImg, username } = props;

  return (
    <div className="repocard_container">
      <div className="col">
        <img src={ownerImg} alt="owner" className="display_image" />
      </div>
      <div className="col">
        <h5>
          <Link to={`/${username}/${arrId}`}>{name}</Link>
          <i class="fa fa-check" aria-hidden="true"></i>
        </h5>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default RepoCard;
