import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Route/Router.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';


import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>

      <QueryClientProvider client={queryClient}>

        <div className='max-w-screen-xl  mx-auto'>
          <RouterProvider router={router} />
        </div>

      </QueryClientProvider>


    </AuthProvider>

  </React.StrictMode>,
)
