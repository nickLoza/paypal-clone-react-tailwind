import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { MenuProvider } from './context/MenuContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </MenuProvider>
  </React.StrictMode>,
)
