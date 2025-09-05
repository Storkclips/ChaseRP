
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import QueuePage from './pages/Queue'
import RulesPage from './pages/Rules'
import StorePage from './pages/Store'
import SupportPage from './pages/Support'
import AccountPage from './pages/Account'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/queue', element: <QueuePage /> },
  { path: '/rules', element: <RulesPage /> },
  { path: '/store', element: <StorePage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/account', element: <AccountPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
