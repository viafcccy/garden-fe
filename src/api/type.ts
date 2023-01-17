import type * as models from './model'

// 基础类型
interface Response<T> {
  code: number
  message: string
  data: T
}

// 特殊类型无 data 返回，例如 POST, PUT, DELETE
export type MessageResponse = Response<null>

export type BackendHealthCheck = Response<models.BackendHealthCheck>
