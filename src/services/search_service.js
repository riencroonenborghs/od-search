import { GoogleQueryService } from '@/services/google_query_service'
import { TPBService } from '@/services/tpb_service'
import { RARBGService } from '@/services/rarbg_service'
import { YoutubeService } from '@/services/youtube_service'

export class SearchService {
  constructor (search) {
    this.search = search
  }

  startSearch () {
    console.log(this.search)
    chrome.windows.create({
      url: this.service.url,
      incognito: this.search.incognito
    })
  }

  get service () {
    if (!this.search.noOptions) return new GoogleQueryService(this.search)
    if (this.search.tpb) return new TPBService(this.search)
    if (this.search.rarbg) return new RARBGService(this.search)
    if (this.search.youtube) return new YoutubeService(this.search)
  }
}
