<template>
  <md-toolbar>
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button" title="Go Back" @click="goBack()" v-if="canGoBack">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
        <h3 class="md-title">
          OD Search
          <span v-if="subTitle">
            <md-icon>chevron_right</md-icon>
            {{subTitle}}
          </span>
        </h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" to="/saved-searches" exact-active-class="active-view" title="Saved Searches">
          <md-icon>save</md-icon>
        </md-button>
        <!-- <md-button class="md-icon-button" @click="showSettings = true" title="Settings">
          <md-icon>more_vert</md-icon>
        </md-button> -->
        <!-- <md-menu md-direction="bottom-start" md-size="auto">
          <md-button class="md-icon-button" md-menu-trigger title="Settings">
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="blacklist()">
              <md-icon>delete_sweep</md-icon>
              Blacklist
            </md-menu-item>
            <md-menu-item>Query Types</md-menu-item>
          </md-menu-content>
        </md-menu> -->
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Toolbar',
  computed: mapState({
    canGoBack: function (state) {
      return state.navBar ? state.navBar.goBack : false
    },
    subTitle: function (state) {
      return state.subTitle
    }
  }),
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    blacklist: function () {
      this.$router.push({ name: 'Blacklist' })
    }
  }
}
</script>

<style lang="scss">
#toolbar { width: 100%; }
</style>
