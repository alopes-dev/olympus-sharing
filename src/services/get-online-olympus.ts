import { axiosInstance } from '@root/configurations/axios-setup'
import { OlympusUserFormatted } from '@root/helpers'
import { TOlympus } from '@root/types'

export const getOnlineOlympus = async (): Promise<TOlympus[]> => {
  const { data } = await axiosInstance.get('?results=33')
  return OlympusUserFormatted(data?.results)
}
