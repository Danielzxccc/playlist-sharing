import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFetchPlaylist } from '../../hooks/useFetchPlaylist'
import PageButton from './PageButton'
import PlaylistCards from './PlaylistCards'
const Playlist = () => {
  const [page, setPage] = useState(1)
  const { isLoading, error, data, isPreviousData } = useFetchPlaylist(page)
  const [query, setQuery] = useState('')

  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error ...</h1>

  const lastPage = () => setPage(data.pagination.total_pages)

  const firstPage = () => setPage(1)

  const pagesArray = Array(data.pagination.total_pages)
    .fill()
    .map((_, index) => index + 1)

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
        {data.playlist
          .filter((item) => {
            return Object.keys(item).some((key) =>
              item[key].toString().toLowerCase().includes(query.toLowerCase())
            )
          })
          .map((item, index) => (
            <PlaylistCards item={item} key={index} index={index} />
          ))}
      </div>

      <nav className='d-flex justify-content-center mt-2'>
        <ul className='pagination bg-dark'>
          <li
            className='page-item'
            onClick={firstPage}
            disabled={isPreviousData || page === 1}
          >
            <span className='page-link'>&lt;&lt;</span>
          </li>
          {pagesArray.map((pg) => (
            <PageButton key={pg} pg={pg} setPage={setPage} />
          ))}
          <li
            className='page-item'
            onClick={lastPage}
            disabled={isPreviousData || page === data.pagination.total_pages}
          >
            <span className='page-link'>&gt;&gt;</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Playlist
