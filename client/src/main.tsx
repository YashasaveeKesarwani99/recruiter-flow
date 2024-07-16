import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <SnackbarProvider
     anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    >
    <App />
    </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
