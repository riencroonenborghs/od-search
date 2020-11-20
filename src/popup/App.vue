<template>
  <div>
    <Toolbar></Toolbar>

    <router-view/>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    Toolbar
  }
}
</script>

<style lang="scss">
#toolbar { width: 100%; }
body {
  width: 600px;
  height: 350px;
  background: var(--md-theme-default-background, #424242);
}
</style>
