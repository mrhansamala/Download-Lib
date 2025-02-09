import path from 'path';
import { fileURLToPath } from 'url';
import setupYtDlp from "setupYtDlp.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        const outputDir = path.resolve(__dirname, 'lib', 'yt-dlp');
        const ytDlp = await setupYtDlp(outputDir, { log: true });
        console.log('yt-dlp downloaded and extracted:', ytDlp);
    } catch (error) {
        console.error('Error setting up yt-dlp:', error);
    }
})();