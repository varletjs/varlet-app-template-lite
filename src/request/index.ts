// https://github.com/varletjs/axle
import { createAxle } from '@varlet/axle'
import { createUseAxle } from '@varlet/axle/use'

const axle = createAxle()

axle.axios.interceptors.response.use(
  (response) => {
    const { code, message } = response.data

    if (code !== 200 && message) {
      Snackbar.warning(message)
    }

    return response.data
  },
  (error) => {
    Snackbar.error(error.message)
    return Promise.reject(error)
  }
)

const useAxle = createUseAxle({
  axle,
  onTransform: (response) => response.data
})

export { axle, useAxle }
