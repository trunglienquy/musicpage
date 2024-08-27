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

const getInfoMusicVideo = async (id_video) => {
  const apiKey = "AIzaSyCX5lEctfZnukkDbTTpHnvLrM1Ffu4GJbc";
  const videoId = id_video
  const apiUrlInfo = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`

  try {
    const response = await fetch(apiUrlInfo);
    const data = await response.json();
    return data.items[0];
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    return null;
  }

//   fetch()
//   .then(response => response.json())
//   .then(data => {
//     if (data.items.length > 0) {
//       const videoDetails = data.items[0];
//       const title = videoDetails.snippet.title;
//       const description = videoDetails.snippet.description;
//       const channelTitle = videoDetails.snippet.channelTitle;
//       const publishedAt = videoDetails.snippet.publishedAt;
//       const viewCount = videoDetails.statistics.viewCount;
//       const likeCount = videoDetails.statistics.likeCount;
//       const commentCount = videoDetails.statistics.commentCount;
      
//       console.log(`Title: ${title}`);
//       console.log(`Description: ${description}`);
//       console.log(`Channel: ${channelTitle}`);
//       console.log(`Published at: ${publishedAt}`);
//       console.log(`Views: ${viewCount}`);
//       console.log(`Likes: ${likeCount}`);
//       console.log(`Comments: ${commentCount}`);
//     } else {
//       console.log('No video found with the given ID.');
//     }
//   })
//   .catch(error => console.error('Error:', error));
}

export { fetchTrendingVideos , getInfoMusicVideo };
