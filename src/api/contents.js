import axios from '../config/axios'

export default {
  getRequest(requestObject) {
    return new Promise((resolve, reject) => {
      axios.request(requestObject)
        .then(res => {
          console.log('%c ========= res ======= ', 'color:#ffffff;background:#000055', res)
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getList(url, params) {
    return this.getRequest({
      url,
      params
    })
  },
  getListByMenuId(url, menuId, limit) {
    return this.getList(url, {
      jsonStr: `{"menuId":${menuId}}`,
      page: 1,
      start: 0,
      limit
    })
  }
}
