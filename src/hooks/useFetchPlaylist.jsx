import axios from 'axios'
import { useQuery } from 'react-query'

export const useFetchPlaylist = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['playlists'],
    queryFn: async () => {
      const response = await axios.get('/playlists/get')
      return response.data
    },
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  })
  return { isLoading, error, data }
}
