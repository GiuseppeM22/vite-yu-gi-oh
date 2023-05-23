<script>

import { store } from './data/yugi'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },

}

</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
</template>

<style scoped></style>
