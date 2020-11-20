<template>
  <md-list-item>
    <md-icon>link</md-icon>
    <span class="md-list-item-text">
      {{blacklistItem.url}}
    </span>
    <md-button v-if="!blacklistItem.defaultUrl" class="md-icon-button md-accent" @click="remove(blacklistItem)" title="Remove search">
      <md-icon>delete_outline</md-icon>
    </md-button>
  </md-list-item>
</template>

<script>
export default {
  name: 'BlacklistItem',
  props: ['blacklistItem'],
  methods: {
    remove: function (search) {
      console.log(search)
      // this.$store.state.savedSearchesService.remove(search)
      // this.$emit('reload')
    }
  }
}
</script>

<style lang="scss">
</style>
