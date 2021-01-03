export class Search {
  get id () { return this._id }
  set id (id) { this._id = id }

  get query () { return this._query }
  set query (query) { this._query = query }

  get queryType () { return this._queryType }
  set queryType (queryType) { this._queryType = queryType }

  get alternative () { return this._alternative }
  set alternative (alternative) { this._alternative = alternative }

  get quoted () { return this._quoted }
  set quoted (quoted) { this._quoted = quoted }

  get incognito () { return this._incognito }
  set incognito (incognito) { this._incognito = incognito }

  get noOptions () {
    return this.queryType.noOptions || false
  }

  get tpb () {
    return this.queryType.label === 'TPB'
  }

  get rarbg () {
    return this.queryType.label === 'RARBG'
  }

  get youtube () {
    return this.queryType.label === 'Youtube'
  }
}
