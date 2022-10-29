import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FollowerCard } from '../../Components';
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
      <h1 className="main_header">Followers of {username}</h1>
      {followersList !== []
        ? followersList.map((data, id) => (
            <FollowerCard key={id} userdata={data} />
          ))
        : null}
    </div>
  );
};

export default FollowersPage;
