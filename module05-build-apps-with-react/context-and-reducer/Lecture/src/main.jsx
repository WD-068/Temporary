import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import ThemeContextProvider from './context/ThemeContext.jsx';
import BookingContextProvider from './context/BookingContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/*  Wrap your app with context providers */}
      <BookingContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </BookingContextProvider>
    </BrowserRouter>
  </StrictMode>
);
