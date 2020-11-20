import store from '@/store'
import { Search } from '@/models/search'

export class SavedSearchesService {
  constructor () {
    this.SAVED_SEARCHES_KEY = 'od-search.saved-searches'
  }

  save (query, queryType, alternative, quoted, incognito) {
    const list = this._list()
    const search = {
      id: list.length,
      query: query,
      queryType: queryType.json,
      alternative: alternative,
      quoted: quoted,
      incognito: incognito
    }
    list.push(search)
    this._save(list)
  }

  load () {
    return this._list().map((item) =>
      Object.assign(
        new Search(),
        item
      )
    )
  }

  remove (search) {
    let list = this._list()
    list = list.filter((item) => item.id !== search.id)
    this._save(list)
    return list
  }

  _list () {
    return JSON.parse(
      store.state.localStorage.get(
        this.SAVED_SEARCHES_KEY
      )
    ) || []
  }

  _save (list) {
    store.state.localStorage.set(this.SAVED_SEARCHES_KEY, JSON.stringify(list))
  }
}
