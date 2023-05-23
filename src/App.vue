<script>

import { store } from './data/yugi'
import axios from 'axios'

export default {
  components: {

  },
  data() {
    return {
      store
    }
  },
  methods: {
    cardsGen() {
      axios.get(this.store.api).then((risp) => {
        const risposta = risp.data.data
        console.log(risposta)
        this.store.cards.push(risposta)
        console.log("mio", this.store.cards)
      })
    }

  }
}

</script>

<template>
  <pre>{{ store.cards[0] }}</pre>

  <button @click="cardsGen">clicca</button>
</template>

<style scoped></style>
