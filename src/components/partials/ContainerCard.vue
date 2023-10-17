<script>
import Card from './Card.vue';

import { store } from '../../data/store';

export default {
  name: "ContainerCard",
  components:{
    Card
  },
  props:{
    title: String,
    type: String
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
    <h1>{{ title }}</h1>
    <div>
      <Card v-for="card in store.apiResponse[type].results" :key="card.id" :cardObj="card" />
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