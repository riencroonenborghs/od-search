export class YoutubeService {
  constructor (search) {
    this.search = search
    this.SERVER = 'https://www.youtube.com/'
    this.PATH = 'results'
  }

  // https://www.youtube.com/results?search_query=something

  get url () {
    return `${this.SERVER}${this.PATH}?search_query=${encodeURIComponent(this._build())}`
  }

  get readableUrl () {
    return `Search Youtube for "${this.search.query}"`
  }

  _build () {
    return `"${this.search.query}" full episodes`
  }
}
