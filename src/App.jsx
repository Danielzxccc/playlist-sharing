import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePlaylist from './pages/CreatePlaylist/CreatePlaylist'
import Home from './pages/Home/Home'
import MostHated from './pages/MostHated/MostHated'
import MostLoved from './pages/MostLoved/MostLoved'
import PlaylistInfo from './pages/PlaylistInfo/PlaylistInfo'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playlist/info/:id' element={<PlaylistInfo />} />
          <Route path='/submitplaylist' element={<CreatePlaylist />} />
          <Route path='/mostloved' element={<MostLoved />} />
          <Route path='/mosthated' element={<MostHated />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
