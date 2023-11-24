import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Route';
import Provider from './Shared/Provider/Provider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <div className='max-w-6xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
