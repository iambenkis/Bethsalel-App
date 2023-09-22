import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { ThemeProvider } from "@material-tailwind/react";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react'

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

reportWebVitals()
