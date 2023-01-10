import axios from 'axios'

// http://localhost:3500/playlists
const api = axios.create({
  baseURL: 'https://playlist-sharing-api.vercel.app/playlists',
})

export const getPlaylists = () => api.get('/get')

export const getInfo = (link) => api.post('/info', { link: link })
