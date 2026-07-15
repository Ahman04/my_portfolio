import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FreelancePage from './FreelancePage.jsx'

const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'
const RootComponent = currentPath === '/freelance' ? FreelancePage : App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)
