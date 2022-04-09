export const api = {
  home: "https://www.eporner.com/api/v2/video/search/?query=&per_page=16&page=1&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json",
};

export const getVideos = ({ query, total, page }) => {
  if (!query) query = "";
  if (!total) total = 20;
  if (!page) page = 1;
  if (query && total && page)
    return `https://www.eporner.com/api/v2/video/search/?query=${query}&per_page=${total}&page=${page}&thumbsize=big&order=top-weekly&gay=1&lq=1&format=json`;
};

export const getSingleVideo = (id) =>
  `https://www.eporner.com/api/v2/video/id/?id=${id}&thumbsize=medium&format=json`;
