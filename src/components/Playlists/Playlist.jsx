import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFetchPlaylist } from '../../hooks/useFetchPlaylist'
import PlaylistCards from './PlaylistCards'
const Playlist = () => {
  const { isLoading, error, data } = useFetchPlaylist()

  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error ...</h1>

  return (
    <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
      {data.map((item, index) => (
        <PlaylistCards item={item} key={index} index={index} />
      ))}
    </div>
  )
}

export default Playlist
