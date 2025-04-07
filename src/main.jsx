import { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
 </StrictMode>,
)


