import axios from 'axios'

// http://localhost:3500/playlists
const api = axios.create({
  baseURL: 'https://playlist-sharing-api.vercel.app/playlists',
})

export const getPlaylists = (pageNumber) => api.get(`/get?page=${pageNumber}`)

export const getInfo = (link) => api.post('/info', { link: link })

export const createPlaylist = (playlist) => api.post('/create', playlist)
