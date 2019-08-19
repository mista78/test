import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import api from "../api";
import { isConstructorDeclaration } from "typescript";
function Home({match, test,setTest}) {
  const [channels, setChannels] = useState([
    {"user_name" : (match.params.id) ? match.params.id : "" }
  ]);
  const [viewers, setViewers] = useState(0);
  const [player, setPlayer] = useState({"data" : []});
  const [views, setViews] = useState({
    "name" : (match.params.id) ? match.params.id : ""
  });
  const fetchData = async () => {
    const result = await api.get("https://api.twitch.tv/helix/streams?language=fr&limit=10 ");
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
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const  setData = () => {
    // if (match.params.id === undefined) {
      // const uViews = {...views}
      // const uViewers = {...viewers}
      // console.log(channels)
    //   JSON.stringify(channels);
    //   uViews.name = channels[0].user_name
    //   uViewers.value = channels[0].viewer_count
    //   uViews.id = channels[0].user_id
    //   setViews(uViews)
    //   setViewers(uViewers)
    // }
  }

  useEffect(() => {

    fetchData().then(setData);
    const time = setInterval(()=>fetchData().then(setData),15000);
    return () => clearInterval(time)
  },[]);

  const play = async () => {
    if(views.id) {
      const res = await api.get("https://api.twitch.tv/helix/streams?user_id=" + views.id);
      const uPlayer = {...player}
      uPlayer.data = res.data.data[0]
      setPlayer(uPlayer)
    }
  }

  useEffect(() => {
    if(views.name == "") {
      const uViews = {...views}
      uViews.name = channels[0].user_name
      setViews(uViews)
    }
    const uViewers = {...player}
    uViewers.value = (player.data.viewer_count) ? player.data.viewer_count : channels[0].viewer_count
    setViewers(uViewers)
    play()
  }, [channels])

  const handelClick = (event) => {
    const updateViews = {...views}
    const uVie = {...viewers}
    uVie.value =  event.target.getAttribute('vie')
    updateViews.name = event.target.getAttribute('value')
    updateViews.id = event.target.getAttribute('id')
    setViewers(uVie)
    setViews(updateViews)
  }
  const url = "https://www.twitch.tv/" + views.name.toLowerCase();

  return (
    <div>
        <div className="left">
          <span className="viewer">{viewers.value}</span>
          <ReactPlayer width="100%" url={url} playing />
        </div>
        <div className="right">
          <div className="row">
            {channels.map(channel => (
              <div key={channel.user_name} className="col-lg-12 col-md-12 col-sm-12 mt-5">
                <div  className="card">
                <h1></h1>
                  <span className="spanF" data-count={channel.user_name}  onClick={handelClick}>
                    <img
                      value={channel.user_name}
                      id={channel.user_id}
                      vie={channel.viewer_count}
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