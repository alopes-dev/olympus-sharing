import { axiosInstance } from '@root/configurations/axios-setup'
import { OlympusUserFormatted } from '@root/helpers'
import { TOlympus } from '@root/types'

export const getSharedOlympus = async (): Promise<TOlympus[]> => {
  const { data } = await axiosInstance.get('?results=234')
  return OlympusUserFormatted(data?.results)
}
