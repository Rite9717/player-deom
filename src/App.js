import React from "react";
import HlsPlayer from "./hlsPlayer";

function App() {
  const streamUrl = "https://storage.googleapis.com/ritesh_movies/movie/master.m3u8"; 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Local HLS Stream</h2>
      <HlsPlayer src={streamUrl} />
    </div>
  );
}

export default App;
