import { useQuery } from 'react-query'
import * as api from '../api/playlistApi'

export const useFetchPlaylistTop = (type) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['topPlaylists'],
    queryFn: async () => {
      const response = await api.getTop(type)
      return response.data
    },
    keepPreviousData: true,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { isLoading, error, data }
}
