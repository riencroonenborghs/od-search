<template>
  <div id="search">
    <form novalidate>
      <flex-col>
        <div id="query-block">
          <flex-row noWrap align-v="center">
            <div id="query">
              <md-field>
                <label>Query</label>
                <md-input v-model="query" type="query" ref="focusable"></md-input>
              </md-field>
            </div>
            <flex-row id="query-buttons" v-if="hasQuery">
              <div>
                <md-button class="md-icon-button" @click="startSearch()">
                  <md-icon>play_arrow</md-icon>
                </md-button>
              </div>
              <div>
                <md-button class="md-icon-button" @click="save()">
                  <md-icon>save</md-icon>
                </md-button>
              </div>
              <div>
                <md-button class="md-icon-button" @click="clear()">
                  <md-icon>close</md-icon>
                </md-button>
              </div>
            </flex-row>
          </flex-row>
        </div>
        <div id="options">
          <flex-row noWrap align-v="center">
            <div class="right-pad">
              <md-field>
                <label>Type</label>
                <md-select v-model="tmpQueryType" @md-selected="queryTypeSelected()">
                  <md-option v-for="queryType in queryTypes" :key="queryType.label" :value="queryType.label">
                    {{queryType.label}}
                  </md-option>
                </md-select>
              </md-field>
            </div>
            <div class="right-pad">
              <md-checkbox v-model="alternative">
                Alternative?
              </md-checkbox>
            </div>
            <div class="right-pad">
              <md-checkbox v-model="quoted">
                Quoted?
              </md-checkbox>
            </div>
            <div>
              <md-checkbox v-model="incognito">
                Incognito?
              </md-checkbox>
            </div>
          </flex-row>
        </div>
        <div id="computed-query" v-if="hasQuery">
          {{computedQuery}}
        </div>
      </flex-col>
    </form>
  </div>
</template>

<script>
import { Search } from '@/models/search'
import { GoogleQueryService } from '@/services/google_query_service'
import { SearchService } from '@/services/search_service'

export default {
  name: 'Search',
  data: () => ({
    // temp
    tmpQueryType: null,
    // model
    query: '',
    queryType: null,
    alternative: false,
    quoted: true,
    incognito: true
  }),
  created () {
    this.$store.dispatch('navReset')
    this.$store.dispatch('titleReset')
    this.$store.dispatch('loadBlacklist')
    this.$store.dispatch('loadQueryTypes')
    // default
    this.tmpQueryType = this.queryTypes[0].label
    this.queryType = this.queryTypes[0]

    setTimeout(() => {
      this.$refs.focusable.$el.focus()
    }, 500)
  },
  computed: {
    hasQuery: function () {
      return this.query !== '' && this.queryType !== null
    },
    queryTypes: function () {
      return this.$store.state.queryTypes
    },
    computedQuery: function () {
      const search = this.createSearch()
      const service = new GoogleQueryService(search)
      return service.readableUrl
    }
  },
  methods: {
    clear: function () {
      this.query = ''
    },
    queryTypeSelected: function () {
      const found = this.queryTypes.find((item) => {
        return item.label.localeCompare(this.tmpQueryType) === 0
      })
      this.queryType = found
    },
    save: function () {
      this.$store.state.savedSearchesService.save(this.query, this.queryType, this.alternative, this.quoted, this.incognito)
      this.$router.push({ name: 'SavedSearch' })
    },
    createSearch: function () {
      return Object.assign(
        new Search(),
        {
          query: this.query,
          queryType: this.queryType,
          alternative: this.alternative,
          quoted: this.quoted,
          incognito: this.incognito
        }
      )
    },
    startSearch: function () {
      const search = this.createSearch()
      const service = new SearchService(search)
      service.startSearch()
    }
  }
}
</script>

<style lang="scss">
#search { padding: 16px; }
#query { width: 100%; }
#query-buttons { width: 216px; }
.right-pad { padding-right: 8px; }
</style>
