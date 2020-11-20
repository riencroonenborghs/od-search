import { GoogleQueryService } from '@/services/google_query_service'

export class SearchService {
  constructor (search) {
    this.search = search
  }

  startSearch () {
    const service = new GoogleQueryService(this.search)
    chrome.windows.create({
      url: service.url,
      incognito: this.search.incognito
    })
  }
}
