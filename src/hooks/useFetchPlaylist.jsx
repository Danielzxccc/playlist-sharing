import { useQuery } from 'react-query'
import * as api from '../api/playlistApi'

export const useFetchPlaylist = (pageNumber) => {
  const { isLoading, error, data, isPreviousData } = useQuery({
    queryKey: ['playlists', pageNumber],
    queryFn: async () => {
      const response = await api.getPlaylists(pageNumber)
      return response.data
    },
    keepPreviousData: true,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { isLoading, error, data, isPreviousData }
}
