import React from "react";
const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class PLayer extends React.Component {
  componentDidMount() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
    document.body.appendChild(script);
  }

  render() {
    return <div id={this.props.targetID} />;
  }
}

export default PLayer;
