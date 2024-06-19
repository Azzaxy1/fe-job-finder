import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@/styles/index.css'
import 'react-quill/dist/quill.snow.css'
import '@fontsource/poppins'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './states/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <NextUIProvider>
            <React.StrictMode>
              <App />
              <Toaster
                position="bottom-right"
                toastOptions={{ style: { fontSize: '18px', fontWeight: '500' } }}
                reverseOrder={false}
                />
            </React.StrictMode>
        </NextUIProvider>
    </HelmetProvider>
    </BrowserRouter>
  </Provider>
)
