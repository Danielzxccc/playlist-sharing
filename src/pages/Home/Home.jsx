import React from 'react'
import Navbar from '../../components/Navbar'
import '../Home/Home.css'
import Playlist from '../../components/Playlists/Playlist'

const Home = () => {
  return (
    <div className='container text-white'>
      <Navbar />
      <h6 className='px-4'>Beta Testing...</h6>
      <Playlist />
    </div>
  )
}

export default Home
