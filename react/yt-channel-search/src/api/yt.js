import axios from "axios";
import { KEY } from "./key";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    type: "video",
    channelId: "UCeH0q0057F4fjNMbQjVSiHQ",
    key: KEY,
  },
});
