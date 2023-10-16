<script>
import Card from './Card.vue';

import { store } from '../../data/store';

export default {
  name: "ContainerCard",
  components:{
    Card
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <div class="container">
    <h1>Film</h1>
    <div class="div">
      <Card v-for="(card , index) in store.apiResponseMovie.results" :key="'card_'+index" :cardObj="card" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  padding: 16px;
  div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
}
</style>