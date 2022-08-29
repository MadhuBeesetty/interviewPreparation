
const VideoPlayer = () => (
  <body>
    <h2>HTTP Video Streaming</h2>
    <p>This video is 61MB and is being streamed instead of downloaded.</p>
    <p>
      Feel free to seek through the video and it only loads the part you want to
      watch
    </p>
    <video id="videoPlayer" width="650" controls muted="muted" autoplay>
      <source src="http://localhost:8000/video" type="video/mp4" />
    </video>
    <i>Big Buck Bunny</i>
  </body>
);

export default VideoPlayer;
