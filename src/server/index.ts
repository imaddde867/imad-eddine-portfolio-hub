import app from './api';

const PORT = process.env.PORT || 3002;

const server = app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

// Cleanup on exit
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('API server closed');
  });
}); 