import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './src/pages/Start/Login/Login'
import ErrorPage from './src/pages/ErrorPage';

const Rotas = createBrowserRouter([
{
  path: '/',
  element: <Login/>,
},
{
  
},
{
  path: '/*',
  element: <ErrorPage/>,
}
,{}]);

import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Rotas}/>
  </StrictMode>,
)
