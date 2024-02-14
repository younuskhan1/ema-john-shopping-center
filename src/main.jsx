import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRoutes from './components/Routes/Routes'
import UserContext from './components/UserContext/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={myCreatedRoutes}></RouterProvider>
    </UserContext>
  </React.StrictMode>,
)
