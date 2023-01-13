import { useQuery } from 'react-query'
import * as api from '../api/playlistApi'
export const useFetchPlaylistInfo = (id) => {
  const playlistInfo = useQuery({
    queryKey: ['playlistInfo'],
    queryFn: async () => {
      const response = await api.getPlaylistInfo(id)
      return response.data[0]
    },
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  const comments = useQuery({
    queryKey: ['comments'],
    queryFn: async () => {
      const response = await api.getComments(id)
      return response.data
    },
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { playlistInfo, comments }
}
