import React from 'react'
import { useFetchPlaylist } from '../../hooks/useFetchPlaylist'
import PlaylistCards from './PlaylistCards'
const Playlist = ({ reload }) => {
  const { isLoading, error, data } = useFetchPlaylist()

  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error ...</h1>
  return (
    <div className='row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
      {data.map((item, index) => (
        <PlaylistCards item={item} key={index} index={index} />
      ))}
    </div>
  )
}

export default Playlist
