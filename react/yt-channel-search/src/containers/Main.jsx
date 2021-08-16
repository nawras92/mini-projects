import { useState } from "react";
import { useSelector } from "react-redux";
import VideoItem from "../components/VideoItem";
import SearchBar from "../components/SearchBar";
import youtube from "../api/yt";

const Main = () => {
  const searchTerm = useSelector((state) => state.GetSearchTerm.term);
  const [videos, setVideos] = useState([]);
  const getSearchResults = async (q) => {
    const response = await youtube.get("/search", {
      params: {
        q: q,
      },
    });
    console.log(videos);
    const data = response.data.items;
    setVideos(data);
  };
  return (
    <div className="main">
      {<SearchBar handleFormSubmit={getSearchResults} />}
      <p className="main-text">
        {videos &&
          searchTerm &&
          `The results for your search '${searchTerm}' are :`}
        {!videos &&
          `Sorry No results found for your search term '${searchTerm}'`}
      </p>
      <div className="videos">
        {searchTerm &&
          videos &&
          videos.map((video) => {
            const info = {
              title: video.snippet.title,
              description: video.snippet.description,
              thumbnail: video.snippet.thumbnails.default.url,
            };
            return <VideoItem key={video.id.videoId} {...info} />;
          })}
      </div>
    </div>
  );
};

export default Main;
