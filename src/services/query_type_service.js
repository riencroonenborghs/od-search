import store from '@/store'
import { QueryType } from '@/models/query_type'

export class QueryTypeService {
  constructor () {
    this.QUERY_TYPE_KEY = 'od-search.query-type'
  }

  load () {
    if (store.state.localStorage == null) {
      this._setDefaults()
      return
    }

    const list = JSON.parse(
      store.state.localStorage.get(
        this.QUERY_TYPE_KEY
      )
    )
    if (list == null) {
      this._setDefaults()
      return
    }

    store.commit('queryTypes', list)
  }

  save () {
    store.state.localStorage.set(this.QUERY_TYPE_KEY, JSON.stringify(store.state.queryType))
  }

  _setDefaults () {
    const list = [
      Object.assign(new QueryType(), { label: 'Movies', extensions: ['avi', 'mp4', 'mkv', 'vob', 'div'] }),
      Object.assign(new QueryType(), { label: 'TPB', noOptions: true }),
      Object.assign(new QueryType(), { label: 'RARBG', noOptions: true }),
      Object.assign(new QueryType(), { label: 'Youtube', noOptions: true }),
      Object.assign(new QueryType(), { label: 'Music', extensions: ['mp3', 'flac', 'aac'] }),
      Object.assign(new QueryType(), { label: 'Books', extensions: ['pdf', 'epub', 'mob'] }),
      Object.assign(new QueryType(), { label: 'Mac Software', extensions: ['dmg', 'sit'] }),
      Object.assign(new QueryType(), { label: 'General', extensions: [] })
    ]
    store.commit('queryTypes', list)
  }
}
