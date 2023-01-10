import { useQuery } from 'react-query'
import * as api from '../api/playlistApi'

export const useFetchPlaylist = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await api.getPlaylists()
      return response.data
    },
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { isLoading, error, data }
}
