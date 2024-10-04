import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import PasswordStrengthChecker from './Components/PasswordStrengthChecker.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordStrengthChecker />
  </StrictMode>,
)
