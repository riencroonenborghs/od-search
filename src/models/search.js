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

  get tpb () {
    return this.queryType.extensions.filter((type) => type === 'tpb').length > 0
  }
}
