import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RetailerProvider } from './context/RetailerContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RetailerProvider>
      <App />
    </RetailerProvider>
  </StrictMode>,
)