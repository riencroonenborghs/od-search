<template>
  <div>
    <md-empty-state v-if="searches.length == 0"
      class="md-primary"
      md-icon="list"
      md-label="No saved searches"
      md-description="You have no searches saves so far.">
    </md-empty-state>
    <md-list class="saved-searched" v-if="searches.length > 0">
      <SavedSearch v-for="search in searches" :key="search.id" :search="search" v-on:reload="reload($event)"></SavedSearch>
    </md-list>
  </div>
</template>

<script>
import SavedSearch from '@/components/SavedSearch'

export default {
  name: 'SavedSearches',
  data: () => ({
    searches: []
  }),
  created () {
    this.$store.dispatch('canGoBack')
    this.$store.commit('subTitle', 'Saved Searches')
    this.searches = this.$store.state.savedSearchesService.load()
  },
  methods: {
    reload: function () {
      this.searches = this.$store.state.savedSearchesService.load()
    }
  },
  components: {
    SavedSearch
  }
}
</script>

<style lang="scss">
.query-type, .md-checkbox.md-disabled { margin-right: 36px; }
// 64 for toolbar
// 2x8 for padding
.saved-searched {
  height: calc(350px - 64px - 8px - 8px);
  overflow: auto;
}
</style>
