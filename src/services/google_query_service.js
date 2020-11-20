import store from '@/store'

export class GoogleQueryService {
  constructor (search) {
    this.search = search
    this.SERVER = 'https://www.google.com/'
    this.PATH = 'search'
  }

  get url () {
    return `${this.SERVER}${this.PATH}?q=${encodeURIComponent(this._build())}`
  }

  get readableUrl () {
    return this._build()
  }

  _build () {
    let query = ''

    if (this.search.alternative) {
      query = '"parent directory" '
    } else {
      query = 'intitle:"index.of" '
    }

    if (this.search.quoted) {
      query += ` "${this.search.query}" `
    } else {
      query += this.search.query
    }

    query += ' -html -htm -php -asp -jsp '
    query += this._extensions()
    query += this._blacklist()

    return query
  }

  _extensions () {
    if (this.search.queryType) return ` (${this.search.queryType.extensions.join('|')}) `
    else return ''
  }

  _blacklist () {
    return store.state.blacklist.map((item) => `-${item.url}`).join(' ')
  }
}
