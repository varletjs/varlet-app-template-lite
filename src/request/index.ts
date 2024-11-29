// https://github.com/varletjs/axle
import { createAxle } from '@varlet/axle'
import { createApi } from '@varlet/axle/api'
import { createUseAxle } from '@varlet/axle/use'

export const axle = createAxle({
  baseURL: import.meta.env.VITE_MOCK_API_BASE
})

export const useAxle = createUseAxle({
  axle,
  onTransform: (response) => response.data
})

export const api = createApi(axle, useAxle)
