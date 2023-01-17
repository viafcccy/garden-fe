/* eslint-disable */
import { inject } from 'vue';
// const childServicePrefix = '/service/sage';

function render(rawTemplate: string, context: Record<string, string | number>): string {
  let template = rawTemplate;
  const tokenList = template.matchAll(/\{(.*?)\}/g);
  if (!tokenList) return template;
  for (const token of tokenList) {
    if (context[token[1]]) {
      const re = new RegExp(token[0], 'gi');
      template = template.replace(re, context[token[1]].toString());
    }
  }
  return template;
}

type FetchOption = {
  header?: Record<string, string>;
  /* eslint-disable-next-line */
  content?: Record<string, any>;
  params?: Record<string, string | number>;
  query?: Record<string, string | number | Array<string> | Array<number> | undefined>;
};

export default {
  get<T>(url: string, options?: FetchOption): Promise<T> {
    return this.fetch<T>({ url, method: 'Get', ...options });
  },
  post<T>(url: string, body: any, options?: FetchOption): Promise<T> {
    return this.fetch<T>({
      url,
      content: body,
      method: 'Post',
      ...options,
    });
  },
  put<T>(url: string, body: any, options?: FetchOption): Promise<T> {
    return this.fetch<T>({
      url,
      content: body,
      method: 'Put',
      ...options,
    });
  },
  delete<T>(url: string, options?: FetchOption): Promise<T> {
    return this.fetch<T>({ url, method: 'Delete', ...options });
  },
  fetch<T>({
    url,
    method,
    header,
    content,
    params,
    query,
  }: {
    url: string;
    method: string;
    header?: Record<string, string>;
    content?: any;
    params?: Record<string, string | number>;
    query?: Record<string, string | number | Array<string> | Array<number> | undefined>;
  }): Promise<T> {
    if (params) {
      url = render(url, params);
    }
    if (query) {
      // prettier-ignore
      url += (url.indexOf('?') === -1 ? '?' : '&')
        + Object.keys(query)
          .filter(key => query[key] !== null
              && query[key] !== undefined)
          .map(k => [query[k]].flat().map(
            value=>`${encodeURIComponent(k)}=${encodeURIComponent(value as string | number)}`
          )).flat().join('&');
    }
    // if (window.__POWERED_BY_QIANKUN__) {
    //   url = childServicePrefix + url;
    // }
    const obj = fetch(url, {
      credentials: 'include',
      method: method ? method : 'Get',
      headers: header ? header : { 'Content-Type': 'application/json' },
      body: content ? JSON.stringify(content) : null,
    })
      .then(res => res.json())
      .then(res => {
        if (res.code) { // 默认 code 为 0 成功，否则做为异常抛出 response
          throw res;
        }
        return res;
      })
      .catch(e => {
        throw {
          code: e.code,
          message: e.message,
          more: {
            url,
            method,
            header,
            content,
          },
        };
      });
    return obj;
  },
  dateFormat(fmt: string, time?: Date): string {
    if (!time) time = new Date();
    const o: Record<string, number> = {
      'M+': time.getMonth() + 1,
      'd+': time.getDate(),
      'h+': time.getHours(),
      'm+': time.getMinutes(),
      's+': time.getSeconds(),
      'q+': Math.floor((time.getMonth() + 3) / 3),
      S: time.getMilliseconds(),
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, `${time.getFullYear()}`.substr(4 - RegExp.$1.length));
    }

    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? `${o[k]}` : `00${o[k]}`.substr(`${o[k]}`.length));
      }
    }

    return fmt;
  },
  keepDecimal(raw: number, n: number): number {
    return Math.floor(raw * 10 ** n) / 10 ** n;
  },
  debouncer(time: number) {
    let timeOut: number | undefined;
    return {
      debounce: (func: (() => void) | (() => Promise<any>)) => {
        clearTimeout(timeOut);
        timeOut = window.setTimeout(() => {
          func();
          timeOut = undefined;
        }, time);
      },
      cancel: () => clearTimeout(timeOut),
    };
  },
  injectGetLoading() {
    const raw = inject('getLoading') as () => () => void;
    return raw;
  },
  injectReload() {
    const raw = inject('reload') as () => void;
    return raw;
  },
  deepEqual(a: any, b: any) {
    return JSON.stringify(a) === JSON.stringify(b);
  },
  groupBy<T, K extends keyof any>(arr: T[], key: (i: T) => K) {
    return arr.reduce((groups, item) => {
      (groups[key(item)] ||= []).push(item);
      return groups;
    }, {} as Record<K, T[]>);
  },
  processGroupBy<T, K extends keyof any, V extends any>(arr: T[], key: (i: T) => K, value: (i: T) => V) {
    return arr.reduce((groups, item) => {
      (groups[key(item)] || []).push(value(item));
      return groups;
    }, {} as Record<K, V[]>);
  },
};
