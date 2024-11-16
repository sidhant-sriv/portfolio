// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  )
}

export default App