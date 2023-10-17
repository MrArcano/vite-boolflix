<script>
import Card from './Card.vue';

import { store } from '../../data/store';

export default {
  name: "ContainerCard",
  components:{
    Card
  },
  props:{
    ObjList: Object,
    title: String
  },
  data() {
    return {
      store
    }
  },
}

// console.log(ObjList);
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div>
      <Card v-for="(card , index) in ObjList.results" :key="'card_'+index" :cardObj="card" />
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