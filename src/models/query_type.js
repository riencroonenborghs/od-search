export class QueryType {
  get noOptions () { return this._noOptions }
  set noOptions (noOptions) { this._noOptions = noOptions }

  get label () { return this._label }
  set label (label) { this._label = label }

  get extensions () { return this._extensions }
  set extensions (extensions) { this._extensions = extensions }

  get json () {
    return {
      label: this._label,
      extensions: this._extensions,
      noOptions: this._noOptions || false
    }
  }
}
