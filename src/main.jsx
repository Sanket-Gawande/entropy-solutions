import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ChakraProvider } from "@chakra-ui/react"
import { BlogsProvider } from './components/BlogContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BlogsProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BlogsProvider>

)
