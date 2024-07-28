import Downloadlib from 'Downloadlib.js';

// Initialize Downloadlib with optional configurations
const downloadlib = new Downloadlib({
  deleteAfterDownload: true,
});

try {
  // Example: Download a video from YouTube
  const youtubeUrl = 'https://www.youtube.com/shorts/H_IwLWa64gs';
  const saveDir = './downloads';
  const result = await downloadlib.downloadFromYouTube(youtubeUrl, saveDir);

  console.log('Downloaded video information:', result);
} catch (error) {
  console.error('Error downloading video:', error);
}