import './card.scss';

const FollowerCard = (props) => {
  const { userdata } = props;

  return (
    <div className="followcard_container">
      <p className="followcard_desc">{userdata.login}</p>
    </div>
  );
};

export default FollowerCard;
