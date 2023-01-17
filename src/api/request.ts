import type * as types from './type';
import url from './url';
import utils from '@/plugins/utils';

export const GetBackendHealthCheck = async () =>
  (await utils.get<types.BackendHealthCheck>(url.BackendHealthCheck, {})).data;
