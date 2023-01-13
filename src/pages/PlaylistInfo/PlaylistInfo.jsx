import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import PlaylistItem from '../../components/Playlists/PlaylistItem'
import { useFetchPlaylistInfo } from '../../hooks/useFetchPlaylistInfo'

const PlaylistInfo = () => {
  const { id } = useParams()

  const { playlistInfo, comments } = useFetchPlaylistInfo(id)
  console.log(playlistInfo)
  console.log(comments)
  return (
    <div className='container text-white'>
      <Navbar />
      <PlaylistItem info={playlistInfo} comments={comments} />
    </div>
  )
}

export default PlaylistInfo
