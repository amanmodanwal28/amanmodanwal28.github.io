import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ScrollContextProvider from './Context/ScrollContext'
import { GitHubProvider } from './Context/GitHubContext'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ScrollContextProvider>
    <GitHubProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="dark" />
        <App />
      </ChakraProvider>
    </GitHubProvider>
  </ScrollContextProvider>,
)

reportWebVitals()
