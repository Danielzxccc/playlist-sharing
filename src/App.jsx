import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePlaylist from './pages/CreatePlaylist/CreatePlaylist'
import Home from './pages/Home/Home'
import Loved from './pages/Loved/Loved'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Loved />} />
          <Route path='/submitplaylist' element={<CreatePlaylist />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
