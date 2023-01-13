import { useQuery } from 'react-query'
import * as api from '../api/playlistApi'

export const useFetchPlaylist = (pageNumber, searchQuery) => {
  const { isLoading, error, data, isPreviousData } = useQuery({
    queryKey: ['playlists', pageNumber, searchQuery],
    queryFn: async () => {
      const response = await api.getPlaylists(pageNumber, searchQuery)
      return response.data
    },
    keepPreviousData: true,
    refetchOnMount: 'always',
    refetchOnWindowFocus: false,
  })
  return { isLoading, error, data, isPreviousData }
}
