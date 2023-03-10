import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { useDebounce } from '../../hooks/useDebounce'
import './CreatePlaylist.css'
import * as api from '../../api/playlistApi'

const CreatePlaylist = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  //states
  const [playlist, setPlaylist] = useState({
    title: '',
    link: '',
    sentby: '',
    description: '',
    imgsrc: '',
    embedsrc: '',
  })
  //   const [image, setImage] = useState('')
  const [invalidLink, setInvalidLink] = useState(false)
  const debouncedStateLink = useDebounce(playlist.link, 500)

  //handle values
  const handleChange = (e) => {
    const { name, value } = e.target
    setPlaylist((prev) => {
      return { ...prev, [name]: value }
    })
  }

  //fetch playlist details
  const fetchInfo = async () => {
    try {
      const data = await api.getInfo(playlist.link)
      const result = data.data
      setPlaylist({
        ...playlist,
        title: result.title,
        imgsrc: result.image,
        embedsrc: result.embed,
      })
      setInvalidLink(false)
    } catch (error) {
      setInvalidLink(true)
      setPlaylist({
        ...playlist,
        title: '',
        imgsrc: '',
      })
    }
  }

  useEffect(() => {
    if (debouncedStateLink) {
      fetchInfo()
    }
  }, [debouncedStateLink])

  //mutations
  const mutation = useMutation({
    mutationFn: (playlist) => api.createPlaylist(playlist),
    onError: (error) => {
      alert('This playlist already exists in the current database.')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['playlists'] })
      navigate('/')
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate(playlist)
  }

  return (
    <div className='container text-white'>
      <Navbar />
      <div className='d-flex justify-content-center flex-col'>
        <form onSubmit={handleSubmit} className='px-4 py-2 mt-4'>
          <div className='mb-2'>
            <label htmlFor='name' className='form-label'>
              Playlist Link
            </label>
            <input
              type='url'
              name='link'
              className='form-control text-white'
              onChange={handleChange}
              required
            />
            <div className='form-text'>Use a Spotify playlist link.</div>
            {invalidLink && (
              <div className='text-danger form-text'>Invalid Link</div>
            )}
          </div>
          <div className='mb-4'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              type='text'
              name='title'
              className='form-control text-white'
              onChange={handleChange}
              defaultValue={playlist.title}
              required
            />
          </div>
          <div className='mb-2'>
            <div>
              <label htmlFor='description' className='form-label'>
                Description
              </label>
              <textarea
                className='form-control text-white'
                placeholder='Leave a comment here'
                rows={3}
                maxLength='100'
                name='description'
                defaultValue={playlist.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className='mb-2'>
            <label htmlFor='sentby' className='form-label'>
              Submitted By:
            </label>
            <input
              type='text'
              maxLength={20}
              name='sentby'
              className='form-control text-white'
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-2 d-flex justify-content-center mx-3'>
            <img src={playlist.imgsrc} alt='' width={300} />
          </div>
          <div className='d-flex '>
            {invalidLink ? (
              <button type='submit' className='btn btn-light' disabled>
                Submit
              </button>
            ) : (
              <button type='submit' className='btn btn-light'>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePlaylist
