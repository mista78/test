import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
function GameStreams({ match, location }) {
  const [streamData, setStreamData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}&first=24&language=fr`
      );
      let dataArray = result.data.data;
      let finalArray = dataArray.map(stream => {
        let newURL = stream.thumbnail_url
          .replace("{width}", "320")
          .replace("{height}", "180");
        stream.thumbnail_url = newURL;
        return stream;
      });
      setStreamData(finalArray);
    };
    fetchData();
  });
  return (
    <div>
      <div className="row">
        {streamData.map(stream => (
          <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
            <div className="card">
              <Link
                className="link views"
                data-count={stream.user_name}
                to={{
                  pathname: "/views/" + stream.user_name
                }}
              >
                <img
                  className="card-img-top"
                  alt=""
                  src={stream.thumbnail_url}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameStreams;
