import React from 'react'

const PageButton = ({ pg, setPage }) => {
  return (
    <li className='page-item'>
      <span onClick={() => setPage(pg)} className='page-link'>
        {pg}
      </span>
    </li>
  )
}

export default PageButton
