import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { ROUTER } from './routes'
import { worker } from './mocks/browser'

if (import.meta.env.MODE === "staging") {
  worker.start({onUnhandledRequest: "bypass"});
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>,
)
