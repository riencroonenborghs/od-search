import store from '@/store'
import { Blacklist } from '@/models/blacklist'

export class BlacklistService {
  constructor () {
    this.BLACKLIST_KEY = 'od-search.blacklist'
  }

  load () {
    if (store.state.localStorage == null) {
      this._setDefaults()
      return
    }

    const list = JSON.parse(
      store.state.localStorage.get(
        this.BLACKLIST_KEY
      )
    )
    if (list == null) {
      this._setDefaults()
      return
    }

    store.commit('blacklist', list)
  }

  save () {
    store.state.localStorage.set(this.BLACKLIST_KEY, JSON.stringify(store.state.blacklist))
  }

  _setDefaults () {
    const list = [
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'watchtheshows.com' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'mmnt.net' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'listen77.com' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'unknownsecret.info' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'trimediacentral.com' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'wallywashis.name' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'ch0c.com' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'hypem.com' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'www.mkvtvseries.com' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'www.dlfox.xyz' }),
      Object.assign(new Blacklist(), { defaultUrl: true, url: 'sirens.rocks' })
    ]
    store.commit('blacklist', list)
  }
}
