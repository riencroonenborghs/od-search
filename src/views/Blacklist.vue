<template>
  <div>
    <md-list class="blacklist" v-if="blacklist.length > 0">
      <BlacklistItem v-for="blacklistItem in blacklist" :key="blacklistItem.url" :blacklistItem="blacklistItem" v-on:reload="reload($event)"></BlacklistItem>
    </md-list>
  </div>
</template>

<script>
import BlacklistItem from '@/components/BlacklistItem'

export default {
  name: 'Blacklist',
  created () {
    this.$store.dispatch('loadBlacklist')
    this.$store.dispatch('canGoBack')
    this.$store.commit('subTitle', 'Blacklist')
  },
  computed: {
    blacklist: function () {
      return this.$store.state.blacklist
    }
  },
  methods: {
    reload: function () {
      this.$store.commit('subTitle', 'Blacklist')
    }
  },
  components: {
    BlacklistItem
  }
}
</script>

<style lang="scss">
// 64 for toolbar
// 2x8 for padding
.blacklist {
  height: calc(350px - 64px - 8px - 8px);
  overflow: auto;
}
</style>
