import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import api from "../api";
function Home({ match }) {
  const [channels, setChannels] = useState([]);
  const [viewers, setViewers] = useState(0);
  const [views, setViews] = useState({
    "name" : (match.params.id) ? match.params.id : "sardoche"
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/streams?first=10&language=fr");
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
      if (match.params.id === undefined) {
        const uViews = {...views}
        const uViewers = {...viewers}
        console.log(finalArray)
        uViews.name = finalArray[0].user_name
        uViewers.value = finalArray[0].viewer_count
        uViews.id = finalArray[0].user_id
        setViews(uViews)
        setViewers(uViewers)
      }
    };
    fetchData();
  }, []);
  const handelClick = (event) => {
    const updateViews = {...views}
    updateViews.name = event.target.getAttribute('value')
    setViews(updateViews)
  }
  const url = "https://www.twitch.tv/" + views.name.toLowerCase();
  return (
    <div>
        <div className="left">
          <ReactPlayer width="100%" url={url} playing />
        </div>
        <div className="right">
          <div className="row">
            {channels.map(channel => (
              <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                <div className="card">
                  <span className="spanF" data-count={channel.user_name}  onClick={handelClick}>
                    <img
                      value={channel.user_name}
                      className="card-img-top"
                      alt=""
                      src={channel.thumbnail_url}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Home;