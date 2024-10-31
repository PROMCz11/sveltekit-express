import express from 'express';
import { handler } from '../build/handler.js'; // Import SvelteKit handler

const app = express();

// Custom API routes
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// SvelteKit handler for routing all other requests
app.use(handler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
