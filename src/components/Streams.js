import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
function Stream() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/streams?first=60&language=fr");
      let dataArray = result.data.data;
      let gameIDs = dataArray.map(stream => {
        return stream.game_id;
      });
      let baseURL = "https://api.twitch.tv/helix/games?";
      let queryParams = "";
      gameIDs.map(id => {
        return (queryParams = queryParams + `id=${id}&`);
      });
      let finalURL = baseURL + queryParams;
      let gameNames = await api.get(finalURL);
      let gameNameArray = gameNames.data.data;
      let finalArray = dataArray.map(stream => {
        stream.gameName = "";
        gameNameArray.map(name => {
          if (stream.game_id === name.id) {
            return (stream.gameName = name.name);
          }
        });
        let newURL = stream.thumbnail_url
          .replace("{width}", "320")
          .replace("{height}", "180");
        stream.thumbnail_url = newURL;
        return stream;
      });
      setChannels(finalArray);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="row">
        {channels.map(channel => (
          <div key={channel.user_name}  className="col-lg-3 col-md-4 col-sm-12 mt-5">
            <div  className="card">
              <Link
                
                className="link views"
                data-count={channel.user_name}
                to={{
                  pathname: "/views/" + channel.user_name
                }}
              >
                <img
                  className="card-img-top"
                  alt=""
                  src={channel.thumbnail_url}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stream;
