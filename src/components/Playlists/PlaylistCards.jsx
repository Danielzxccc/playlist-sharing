import React from 'react'

const PlaylistCards = ({ item, index }) => {
  return (
    <div className='col bg-transparent my-2 h-100' key={index}>
      <div className='bg-light px-3 py-2 rounded'>
        <img
          src={item.imgsrc === null ? alt : item.imgsrc}
          className='card-img-top'
          height={400}
        />
        <div className='card bg-secondary' style={{ height: 250 }}>
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
    </div>
  )
}

export default PlaylistCards
