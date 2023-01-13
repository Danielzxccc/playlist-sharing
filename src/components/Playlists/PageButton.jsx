import React from 'react'

const PageButton = ({ pg, setPage, isPreviousData }) => {
  const handlePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setPage(pg)
  }
  return (
    <li
      role='button'
      className={isPreviousData ? 'page-item disabled' : 'page-item'}
    >
      <span role='button' onClick={handlePage} className='page-link'>
        {pg}
      </span>
    </li>
  )
}

export default PageButton
