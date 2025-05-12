
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced console logs to help debug if there are any issues
console.log('Application starting...');
console.log('Document ready state:', document.readyState);
console.log('DOM element "root":', document.getElementById("root"));
console.log('Window location:', window.location.href);

// Wait for the DOM to be fully loaded
function initApp() {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error('Root element not found!');
    return;
  }
  
  try {
    console.log('Creating React root...');
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
