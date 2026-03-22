import { http } from '@/utils/http'

type updateParams = {
  mobile: string
}

export const postUpdateStatusAPI = (data: updateParams) => {
  return http({
    method: 'POST',
    url: '/api/system/DataInterface/805469716360462533/Actions/Response',
    data,
  })
}
