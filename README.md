# Download-lib

Downloadlib is a Node.js class for downloading content from various popular websites such as YouTube, Instagram, and TikTok. It uses tools like `yt-dl` for YouTube downloads and handles downloading media from Instagram and TikTok.

<div align="center">

[![npm version](https://badge.fury.io/js/download-lib.svg)](https://badge.fury.io/js/downloadlib)
![VIEWS](https://komarev.com/ghpvc/?username=mrhansamala-Download-Lib&label=REPOSITORY+VIEWS&style=for-the-badge)

</div>

## Installation

To use Downloadlib, first install it via npm:

```bash
npm install downloadlib
```

## Usage

### Example Usage

```javascript
import Downloadlib from 'downloadlib';

// Initialize Downloadlib with optional configurations
const downloadlib = new Downloadlib({
    ytDlpPath: '', // Optional: Specify the path for yt-dlp if needed
    deleteAfterDownload: true,
});

// Example: Download a video from YouTube
const youtubeUrl = 'https://www.youtube.com/watch?v=yourvideoid';
const saveDir = './downloads';
downloadlib.downloadFromYouTube(youtubeUrl, saveDir, { audioOnly: false })
  .then((result) => {
    console.log('Downloaded video information:', result);
  })
  .catch((error) => {
    console.error('Error downloading video:', error);
  });

// Example: Download media from Instagram
const instagramUrl = 'https://www.instagram.com/p/yourpostid/';
downloadlib.downloadFromInstagram(instagramUrl, saveDir)
  .then((result) => {
    console.log('Downloaded Instagram media:', result);
  })
  .catch((error) => {
    console.error('Error downloading Instagram media:', error);
  });

// Example: Download video from TikTok
const tiktokUrl = 'https://www.tiktok.com/@username/video/123456789';
downloadlib.downloadFromTikTok(tiktokUrl, saveDir)
  .then((result) => {
    console.log('Downloaded TikTok video:', result);
  })
  .catch((error) => {
    console.error('Error downloading TikTok video:', error);
  });

// Example: Determine the type of a URL
const urlToCheck = 'https://www.reddit.com/r/javascript/';
const urlType = downloadlib.checkUrlType(urlToCheck);
console.log(`URL '${urlToCheck}' is of type '${urlType}'.`);
// Output: URL 'https://www.reddit.com/r/javascript/' is of type 'Reddit'.

// You can also explore more methods provided by Downloadlib for other functionalities.
```


#### `class Downloadlib`

##### Constructor

```javascript
/**
 * Initialize Downloadlib with optional configurations.
 * @param {object} options - Optional configurations.
 */
const downloadlib = new Downloadlib(options);
```

##### Methods

- `ensureDirectoryExists(dirPath)`: Ensures that a directory exists at the specified path. Creates the directory if it doesn't already exist.
- `deleteFile(filepath)`: Deletes a file from the filesystem.
- `downloadFromInstagram(url, saveDir)`: Downloads media (photos or videos) from Instagram using `instagramGetUrl` and Axios. It handles multiple media files if available.
- `downloadFromYouTube(url, saveDir, options)`: Downloads videos or playlists from YouTube using `yt-dl`. Supports options like `audioOnly` to download only audio.
- `downloadFromTikTok(url, saveDir)`: Downloads videos from TikTok using a custom function (`tiktokdl`).
- `downloadFromTwitter(url, saveDir)`: Downloads videos from Twitter using `yt-dl`.
- `downloadFromFacebook(url, saveDir, options)`: Downloads videos from Facebook using `yt-dl`.
- `downloadFromTwitch(url, saveDir, options)`: Downloads videos from Twitch using `yt-dl`.
- `downloadFromDailymotion(url, saveDir, options)`: Downloads videos from Dailymotion using `yt-dl`.
- `downloadFromSoundCloud(url, saveDir)`: Downloads audio tracks from SoundCloud using `yt-dl`.
- `downloadFromReddit(url, saveDir, options)`: Downloads videos from Reddit using `yt-dl`.
- `checkUrlType(url)`: Checks the type of a URL and returns the corresponding social media platform or streaming service (YouTube, Instagram, TikTok, Pinterest, Facebook, Twitter, Reddit, SoundCloud, Dailymotion, Twitch). If the URL doesn't match any recognized patterns, it returns `'Unknown'`.

#### Example Code

See examples above for usage of each method.

### Configuration Options

You can pass optional configurations when initializing `downloadlib`. These options include:

- `options.ytDlpPath`: Path to yt-dl executable.
- `options.deleteAfterDownload`: Whether to delete the downloaded files after completion.

### Issues

If you encounter any issues or have suggestions, please open an issue [here](https://github.com/mrhansamala/Download-Lib/issues).

<h2 align="center">🔰 Download Lib NPM 🔰
</h2>

[![MR-Hansamala](https://github.com/mrhansamala.png)](https://github.com/mrhansamala) 
----|
[MR-Hansamala](https://github.com/mrhansamala) 
Owner, Main Developer |
