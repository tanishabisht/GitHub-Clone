import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../pages.scss';
import axios from 'axios';

const FollowersPage = () => {
  const [followersList, setFollowersList] = useState([]);
  let { username } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/followers`)
      .then((res) => {
        console.log(res.data);
        setFollowersList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main_container">
      <div className="col">
        <code>Application</code>
        {followersList !== []
          ? followersList.map((data, id) => <h1 key={id}>{data.login}</h1>)
          : null}
      </div>
    </div>
  );
};

export default FollowersPage;
