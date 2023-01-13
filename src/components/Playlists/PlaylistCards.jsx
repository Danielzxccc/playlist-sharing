import React from 'react'
import { useNavigate } from 'react-router-dom'

const PlaylistCards = ({ item, index }) => {
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/playlist/info/${id}`)
  }
  return (
    <div className='col bg-transparent my-2 h-100' key={index}>
      <div
        className='bg-light px-3 py-2 rounded'
        role='button'
        onClick={() => handleNavigate(item.id)}
      >
        <div className='ratio ratio-1x1'>
          <img
            src={item.imgsrc === null ? alt : item.imgsrc}
            className='card-img-top'
            height={400}
            alt={item.description}
          />
        </div>
        <div className='card bg-secondary' style={{ height: 150 }}>
          <div className='card-body'>
            <h5 className='card-title fw-bold'>{item.title}</h5>
            <span className='d-flex'>
              <h5 className='me-3'>Sent by:</h5>
              <p>{item.sentby}</p>
            </span>
            <a
              href={item.link}
              target='_blank'
              className='nav-link text-decoration-underline'
            >
              Go to Playlist
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistCards
