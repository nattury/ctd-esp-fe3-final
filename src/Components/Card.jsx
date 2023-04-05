import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  const [fav, setFav] = useState([]);
  const addFav = () => {
    let fav = {
      name: name,
      username: username,
    };
    localStorage.setItem("favs", JSON.stringify(fav));
    alert(`Se agregó a ${fav.name} a los favoritos`);
  };

  const { state } = useGlobalStates();
  const style = { color: state.dark && "#FFF" };

  return (
    <div className="card" style={{}}>
      {username ? (
        <img src="./images/doctor.jpg" alt="doctor" width={200} height={200} />
      ) : null}
      {username ? (
        <Link to={`/dentist/${id}`} style={style}>
          <a>{name}</a>
        </Link>
      ) : null}
      <h5>{username}</h5>
      {username ? (
        <button
          onClick={addFav}
          className="favButton"
          style={{ color: "transparent", textShadow: "0 0 0 purple" }}
        >
          ⭐
        </button>
      ) : null}
    </div>
  );
};

export default Card;
