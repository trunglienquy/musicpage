// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'X-Requested-With']
// }));

// app.use(express.json());

// app.post('/api/auth/login', (req, res) => {
//   const { username, password } = req.body;
//   // Handle authentication here
//   res.json({ message: 'Login successful', user: username });
// });

// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

// Cấu hình CORS để cho phép yêu cầu từ React client (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'X-Requested-With']
}));

app.use(express.json());

// Endpoint để xử lý yêu cầu đăng nhập (chỉ là ví dụ)
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  // Xử lý đăng nhập ở đây
  res.json({ message: 'Login successful', user: username });
});

// Endpoint để lấy danh sách bài hát từ Spotify API
app.get('/api/spotify/tracks', async (req, res) => {
  const client_id = '3750b1c2a2e1408faa3ca48fab9128ae';
  const client_secret = '4d7447501b664407b09ffb2408bf1e19';

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');

  try {
    // Lấy token từ Spotify API
    const tokenResponse = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
    });

    const token = tokenResponse.data.access_token;

    // Lấy danh sách bài hát từ Spotify API
    const playlistId = '37i9dQZEVXbLdGSmz6xilI'; // Playlist ID bạn muốn lấy
    const trackResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Trả về dữ liệu bài hát cho client
    res.json(trackResponse.data.items.slice(0, 5)); // Lấy 5 bài hát đầu tiên
  } catch (error) {
    console.error('Error fetching Spotify tracks:', error);
    res.status(500).json({ error: 'Failed to fetch Spotify tracks' });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
