enum ErrorCode {
  SUCCESS = 0, // 成功
  AUTH_FAILED = 10000, // 鉴权失败
  PARAM_ILLEGAL = 10001, // 参数不合法
  RESULT_NOT_EXIST = 10002, // 结果不存在
  TOKEN_NOT_VALID = 11003, // 请获取 token
  USER_NOT_EXIST = 11001, // 用户不存在
  NAMESPACE_RELATION_NOT_EXIST = 11002, // 空间关系不存在
  ROLE_NAMESPACE_RELATION_NOT_MATCH = 11003, // 角色对应空间不匹配
  ACCESS_INFO_NOT_EXIST = 11004, // 资源权限项不存在
  ADD_USER_PERMISSION_FAILED = 11005, // 新增用户权限失败
  ROLE_INFO_NOT_EXIST = 11006, // 角色不存在
  ADD_NAMESPACE_FAILED = 11007, // 添加空间失败
  USER_HAS_NO_ROLE = 11008, // 用户没有任何角色
  USER_HAS_NO_PERMISSION = 11009, // 用户没有资源操作权限
  PRODUCT_UNDEFINED = 11010, // 第三方产品未定义
  INSUFFICIENT_PERMISSION = 11011, // 权限不足
  ROLE_NAME_EXIST = 11012, // 角色已存在
  ROLE_HAS_DEFAULT_ROLE = 11013, // 默认角色不可删除或修改
  ROLE_NAME_NOT_EXIST = 11014, // 角色不存在
  PRODUCT_DOMAIN_UNDEFINED = 11015, // 第三方产品 URL 未配置
  RESOURCE_TYPE_NOT_SUPPORT = 11016, // 资源类型不支持
  REPORT_ACCESS_INFO_FAILED = 11017, // 上报权限信息失败
  ACCESS_ADD_MODE_NOT_EXIST = 11018, // 权限增加类型不存在
  SYSTEM_ERROR = 999, // 系统错误
}
export default ErrorCode
