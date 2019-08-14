import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top?first=25");
      let dataArray = result.data.data;
      let finalArray = dataArray.map(game => {
        let newURL = game.box_art_url
          .replace("{width}", "285")
          .replace("{height}", "380");
        game.box_art_url = newURL;
        return game;
      });
      // console.log(finalArray);
      setGames(finalArray);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="row">
        {games.map(game => (
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-5">
            <div className="card">
              <Link
                className="link"
                to={{
                  pathname: "/game/" + game.name,
                  state: {
                    gameID: game.id
                  }
                }}
              >
                <img className="card-img-top" alt="" src={game.box_art_url} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
