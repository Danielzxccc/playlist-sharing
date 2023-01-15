import React from 'react'
import { Link } from 'react-router-dom'
const MostLovedItems = ({ item, index }) => {
  return (
    <div className='border border-light p-3 row row-cols-3 align-items-center text-start w-75 my-3'>
      <div className='fw-bold flex-grow-1 col'>
        {index + 1} {index + 1 === 1 ? '👑' : ''}
      </div>
      <div className='text-center'>
        <Link
          className='text-white fw-bold flex-grow-1 col'
          to={`/playlist/info/${item.id}`}
        >
          {item.title}
        </Link>
      </div>
      <div className='col text-center'>sent by {item.sentby}</div>
    </div>
  )
}

export default MostLovedItems
