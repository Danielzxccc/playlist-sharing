import React, { useEffect, useState } from 'react'
import { useFetchPlaylist } from '../../hooks/useFetchPlaylist'
import PageButton from './PageButton'
import PlaylistCards from './PlaylistCards'
import { useDebounce } from '../../hooks/useDebounce'
const Playlist = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const deboucedQuery = useDebounce(query, 800)
  const { isLoading, error, data, isPreviousData } = useFetchPlaylist(
    page,
    deboucedQuery
  )

  if (isLoading) return <h1>Loading ...</h1>
  if (error) return <h1>Error ...</h1>

  const lastPage = () => {
    setPage(data.pagination.total_pages)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const firstPage = () => {
    setPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setPage(1)
  }

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
          onChange={handleSearch}
        />
      </div>
      <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
        {data.playlist.map((item, index) => (
          <PlaylistCards item={item} key={index} index={index} />
        ))}
      </div>

      <nav className='d-flex justify-content-center mt-2'>
        <ul className='pagination'>
          <li
            className={
              isPreviousData || page === 1 ? 'page-item disabled' : 'page-item'
            }
            onClick={firstPage}
          >
            <span className='page-link'>First Page</span>
          </li>
          {pagesArray.map((pg) => (
            <PageButton
              key={pg}
              pg={pg}
              setPage={setPage}
              isPreviousData={isPreviousData}
            />
          ))}
          <li
            className={
              isPreviousData || page === data.pagination.total_pages
                ? 'page-item disabled'
                : 'page-item'
            }
            onClick={lastPage}
          >
            <span className='page-link'>Last Page</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Playlist
