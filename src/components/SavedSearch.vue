<template>
  <md-list-item md-expand>
    <md-icon>{{icon}}</md-icon>
    <span class="md-list-item-text">
      <flex-row noWrap align-v="center" align-h="start">
        <md-button class="md-icon-button md-accent" @click="remove(search)" title="Remove search">
          <md-icon>delete_outline</md-icon>
        </md-button>
        <md-button class="md-icon-button md-primary" @click="startSearch(search)" title="Search!">
          <md-icon>play_arrow</md-icon>
        </md-button>
        <span>{{search.query}}</span>
      </flex-row>
    </span>

    <md-list slot="md-expand">
      <flex-row>
        <md-list-item class="md-inset">
          <span class="query-type">{{search.queryType.label}}</span>
          <md-checkbox v-model="search.alternative" disabled>
            Alternative?
          </md-checkbox>
          <md-checkbox v-model="search.quoted" disabled>
            Quoted?
          </md-checkbox>
          <md-checkbox v-model="search.incognito" disabled>
            Incognito?
          </md-checkbox>
        </md-list-item>
      </flex-row>
    </md-list>
  </md-list-item>
</template>

<script>
import { SearchService } from '@/services/search_service'

export default {
  name: 'SavedSearch',
  props: ['search'],
  computed: {
    icon: function () {
      let icon = 'search'
      switch (this.search.queryType.label) {
        case 'Movies':
          icon = 'movie'
          break
        case 'Music':
          icon = 'music_note'
          break
        case 'Books':
          icon = 'book'
          break
        case 'Mac Software':
          icon = 'widgets'
          break
        case 'General':
          icon = 'search'
          break
        default:
          icon = 'search'
      }
      return icon
    }
  },
  methods: {
    remove: function (search) {
      this.$store.state.savedSearchesService.remove(search)
      this.$emit('reload')
    },
    startSearch: function (search) {
      const service = new SearchService(search)
      service.startSearch()
    }
  }
}
</script>

<style lang="scss">
.query-type, .md-checkbox.md-disabled { margin-right: 36px; }
.md-list-item-text .md-button { width: 40px; }
</style>
