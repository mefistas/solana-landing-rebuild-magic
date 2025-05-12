
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Console log to help debug if there are any issues
console.log('Application starting...');

createRoot(document.getElementById("root")!).render(<App />);
