import { http } from '@/utils/http'

type summitParams = {
  mobile: string
  managerKnown: string
  problemChannel: string
  advantageMarket: string
  needHelp: string
  unsatisfied: string
  suggestion: string
  submittedAt: number
}

export const postSubmitAPI = (data: summitParams) => {
  return http({
    method: 'POST',
    url: '/api/system/DataInterface/805264249021530309/Actions/Response',
    data,
  })
}
