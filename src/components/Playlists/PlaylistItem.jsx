import React from 'react'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { randomUsername } from '../../utils/randomUsername'
import * as api from '../../api/playlistApi'
import { useRef } from 'react'

const PlaylistItem = ({ info, comments }) => {
  if (info.isError) return <h1>Error...</h1>
  if (info.isLoading) return <h1>Loading...</h1>
  const queryClient = useQueryClient()

  const details = info.data
  const comment = comments.data
  const { id } = useParams()
  const commentRef = useRef()

  const [commentObj, setCommentObj] = useState({
    message: '',
    type: 'loved',
    name: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCommentObj((prev) => {
      return { ...prev, [name]: value }
    })
  }
  const handlePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  //mutation for comments
  const mutation = useMutation({
    mutationFn: (comment) => api.createComment(comment),
    onError: (error) => {
      console.log(error)
      if (error.response === 429) {
        alert('Too many request')
      } else {
        alert('Server Error Avoid Spamming')
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
      commentRef.current.reset()
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({
      playlistid: id,
      message: commentObj.message,
      type: commentObj.type,
      name: randomUsername(),
    })
  }

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h3 className='fw-bold'>{details.title}</h3>
        <h4>
          <span className='fw-bold'>playlist by</span> : {details.sentby}
        </h4>
        <h4>
          <span className='fw-bold'>Description</span> :{' '}
          <span className='fst-italic'>{details.description}</span>
        </h4>
      </div>
      <div className='mx-auto'>
        <div className='ratio ratio-1x1' style={{ height: 550 }}>
          <iframe src={details.embedsrc}></iframe>
        </div>
      </div>

      <form className='w-100' onSubmit={handleSubmit} ref={commentRef}>
        <div className='mt-5'>
          <div className='form-floating mb-3'>
            <select
              className='form-select text-white'
              name='type'
              onChange={handleChange}
              defaultValue='loved'
              required
            >
              <option value='loved'>Yes</option>
              <option value='hated'>No</option>
            </select>
            <label htmlFor='floatingSelect'>Do you like this playlist?</label>
          </div>
          <div className='form-floating'>
            <textarea
              className='form-control text-white'
              placeholder='Leave a comment here'
              defaultValue=''
              maxLength={200}
              name='message'
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor='floatingTextarea2'>Comments</label>
            <button type='submit' className='btn btn-light mt-3'>
              Enter
            </button>
          </div>
        </div>
      </form>

      <div className='comments mt-2 mx-3'>
        {comments.isError && <h1>Error...</h1>}
        {comments.isLoading && <h1>Loading...</h1>}
        <div className='fw-bold text-danger'>Red Name = Hater</div>
        {comment?.map((item, index) => (
          <div className='my-3 border border-light p-3 rounded' key={index}>
            <div
              className={
                item.type === 'loved'
                  ? 'fw-bold text-success'
                  : 'fw-bold text-danger'
              }
            >
              {item.name}
            </div>
            <div>{item.message}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlaylistItem
