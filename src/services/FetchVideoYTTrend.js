const fetchTrendingVideos = async () => {
  const apiKey = "AIzaSyCX5lEctfZnukkDbTTpHnvLrM1Ffu4GJbc";
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=VN&maxResults=1&videoCategoryId=10&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.items[0]; // Video đầu tiên
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    return null;
  }
};

export { fetchTrendingVideos };
