import { GoogleQueryService } from '@/services/google_query_service'
import { TPBService } from '@/services/tpb_service'

export class SearchService {
  constructor (search) {
    this.search = search
  }

  startSearch () {
    const service = this.search.tpb ? new TPBService(this.search) : new GoogleQueryService(this.search)
    chrome.windows.create({
      url: service.url,
      incognito: this.search.incognito
    })
  }
}
