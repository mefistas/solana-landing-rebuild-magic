
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced console logs to help debug GitHub Pages deployment issues
console.log('Application starting...');
console.log('Document ready state:', document.readyState);
console.log('DOM element "root":', document.getElementById("root"));
console.log('Window location:', window.location.href);
console.log('Base URL:', import.meta.env.BASE_URL);
console.log('Build mode:', import.meta.env.MODE);
console.log('Origin:', window.location.origin);
console.log('Path:', window.location.pathname);

// Function to check if we're on GitHub Pages
function isGitHubPages() {
  return window.location.hostname.includes('github.io');
}

// Wait for the DOM to be fully loaded
function initApp() {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error('Root element not found!');
    return;
  }
  
  try {
    console.log('Creating React root...');
    console.log('Running on GitHub Pages:', isGitHubPages());
    const root = createRoot(rootElement);
    console.log('Rendering App...');
    root.render(<App />);
    console.log('App successfully rendered');
  } catch (error) {
    console.error('Error rendering the App:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
