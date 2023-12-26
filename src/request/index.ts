// https://github.com/varletjs/axle
import { createAxle, RunnerMethod, AxleRequestConfig } from '@varlet/axle'
import { createUseAxle, UseAxleOptions } from '@varlet/axle/use'

export interface Response<T> {
  data: T
  code: number
  message: string
}

export type Options<V, R, P> = Partial<UseAxleOptions<V, R, P>>

export const axle = createAxle({
  baseURL: import.meta.env.VITE_MOCK_API_BASE
})

export const useAxle = createUseAxle({
  axle,
  onTransform: (response) => response.data
})

export function api(url: string, method: RunnerMethod) {
  function load<V, P = Record<string, any>>(params?: P, config?: AxleRequestConfig): Promise<Response<V>> {
    return axle[method](url, params, config)
  }

  function use<V, RV = V, P = Record<string, any>, R = Response<RV>>(options: Options<V, R, P> = {}) {
    return useAxle({ url, method, ...options })
  }

  return {
    url,
    load,
    use
  }
}
