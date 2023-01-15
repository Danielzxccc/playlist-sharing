import React from 'react'
import MostLovedItems from '../../components/MostLovedItems'
import Navbar from '../../components/Navbar'
import { useFetchPlaylistTop } from '../../hooks/useFetchTopPlaylist'

const MostHated = () => {
  const { isLoading, error, data } = useFetchPlaylistTop('dislike')
  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error ...</h1>
  return (
    <div className='container text-white'>
      <Navbar />
      <div className='d-flex justify-content-center flex-column align-items-center mt-4'>
        <h3>Most Hated</h3>
        {data.map((item, index) => (
          <MostLovedItems key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

export default MostHated
