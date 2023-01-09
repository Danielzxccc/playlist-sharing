import React from 'react'

const PlaylistCards = ({ item, index }) => {
  return (
    <div className='col bg-light py-3 mx-3' key={index} style={{ width: 400 }}>
      <img
        src={item.imgsrc === null ? alt : item.imgsrc}
        className='card-img-top'
      />
      <div className='card bg-secondary'>
        <div className='card-body'>
          <h5 className='card-title fw-bold'>{item.title}</h5>
          <span>
            <h5 className='me-3'>Description:</h5>
            <p>{item.description}</p>
          </span>
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
  )
}

export default PlaylistCards
