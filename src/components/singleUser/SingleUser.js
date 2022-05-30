import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);
  return (
    <div>
      <h1>Welcome {profile.name}</h1>
      <h3>Your email : {profile.email}</h3>
      <p>City: {profile.address?.city}</p>
    </div>
  );
};

export default SingleUser;
