const defaultApiUrl = import.meta.env.VITE_API_URL || (typeof window !== 'undefined' && !window.location.hostname.includes('localhost')
  ? 'https://it-developer-project-2.onrender.com'
  : 'http://localhost:5000');

export const API_BASE_URL = defaultApiUrl;
