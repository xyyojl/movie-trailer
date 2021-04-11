const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 10

const storage = {
  get (key, def) {
    const data = window.localStorage.getItem(key)
    if (!data) return def
    try {
      const result = JSON.parse(data)
      return result
    } catch (error) {
      return def
    }
  },
  set (key, val) {
    try {
      const str = JSON.stringify(val)
      window.localStorage.setItem(key, str)
    } catch (error) {
      console.log(error)
    }
  }
}

// 搜索缓存类
class SearchCache {
  constructor () {
    this.searchList = storage.get(SEARCH_KEY, [])
  }

  getAll () {
    return this.searchList
  }

  addOne (query) {
    const list = [...this.searchList]
    const index = list.findIndex(s => s === query)
    if (index > -1) {
      list.splice(index, 1)
    }
    list.unshift(query)
    if (list.length > SEARCH_MAX_LENGTH) {
      list.pop()
    }

    return this._resetList(list)
  }

  removeOne (query) {
    const list = this.searchList.filter(s => s !== query)
    return this._resetList(list)
  }

  clearAll () {
    return this._resetList([])
  }

  // 私有方法
  _resetList (list) {
    this.searchList = list
    storage.set(SEARCH_KEY, list)
    return this.searchList
  }
}

export default new SearchCache()
