// keep-alive.js
const https = require("https");

const URL = "https://n8n-youtube-24q8.onrender.com"; // your Render service URL

function ping() {
  https.get(URL, (res) => {
    console.log(`[${new Date().toISOString()}] Ping sent, status: ${res.statusCode}`);
  }).on("error", (e) => {
    console.error(`[${new Date().toISOString()}] Error pinging server:`, e.message);
  });
}

// Ping every 5 minutes (Render free tier allows 15 minutes idle before sleep)
setInterval(ping, 5 * 60 * 1000);
ping(); // initial ping immediately
