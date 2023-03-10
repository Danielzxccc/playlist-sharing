import axios from 'axios'

//https://playlist-sharing-api.vercel.app/playlists
// http://localhost:3500/playlists
const api = axios.create({
  baseURL: `${import.meta.env.VITE_URI}/playlists`,
})

const api2 = axios.create({
  baseURL: `${import.meta.env.VITE_URI}/comments`,
})

export const getPlaylists = (pageNumber, search) =>
  api.get(`/get?page=${pageNumber}&search=${search}`)

export const getInfo = (link) => api.post('/info', { link: link })

export const getTop = (type) => api.post('/top', { type: type })

export const createPlaylist = (playlist) => api.post('/create', playlist)

export const getPlaylistInfo = (id) => api.get(`/get/${id}`)

export const getComments = (id) => api2.get(`/get/${id}`)

export const createComment = (comment) => api2.post('/create', comment)
