import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID TZNBo8bKPG7uWDnni-cy6SKAlIjVsm0JT9k2AFIcw-w",
  },
});
