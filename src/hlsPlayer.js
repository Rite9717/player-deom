import React, { useRef } from "react";
import Hls from "hls.js";

const HlsPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(err => console.log("Play failed:", err));
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.play().catch(err => console.log("Play failed:", err));
    }
  };

  return (
    <div>
      <video ref={videoRef} controls width="640" height="360" />
      <br />
      <button onClick={handlePlay} style={{ marginTop: "10px" }}>
        Play Stream
      </button>
    </div>
  );
};

export default HlsPlayer;
