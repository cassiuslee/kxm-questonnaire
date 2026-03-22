import { http } from '@/utils/http'

type mobileParams = {
  mobile: string
}

type userInfo = {
  f_id: string
  share_status: number
  qna_name: string
}

export const postUserInfoAPI = (data: mobileParams) => {
  return http<userInfo[]>({
    method: 'POST',
    url: '/api/system/DataInterface/805501661966500037/Actions/Response',
    data,
  })
}
