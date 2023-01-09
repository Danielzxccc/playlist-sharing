import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFetchPlaylist } from '../../hooks/useFetchPlaylist'
import PlaylistCards from './PlaylistCards'
const Playlist = () => {
  const { isLoading, error, data } = useFetchPlaylist()
  const [query, setQuery] = useState('')

  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error ...</h1>

  return (
    <div className='container'>
      <div className='d-flex justify-content-end align-items-center'>
        <label className='fs-5 me-3'>Search</label>
        <input
          type='text'
          className='form-control text-white'
          name='query'
          style={{ width: 200 }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
        {data
          .filter((item) => {
            return Object.keys(item).some((key) =>
              item[key].toString().toLowerCase().includes(query.toLowerCase())
            )
          })
          .map((item, index) => (
            <PlaylistCards item={item} key={index} index={index} />
          ))}
      </div>
    </div>
  )
}

export default Playlist
