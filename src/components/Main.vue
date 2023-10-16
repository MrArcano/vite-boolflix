<script>
import ContainerCard from './partials/ContainerCard.vue';
import { store } from '../data/store';

export default {
  name: "Main",
  components:{
    ContainerCard
  },
  data() {
    return {
      store
    }
  },
}

</script>

<template>
  <main>
    <ContainerCard v-if="store.typeFlag !== 'Serie'" :ObjList="store.apiResponse.movie" :title="'Film'" />
    <ContainerCard v-if="store.typeFlag !== 'Film'" :ObjList="store.apiResponse.tv" :title="'Serie TV'"/>
  </main>
</template>

<style lang="scss" scoped>
  main{
    height: calc(100vh - 60px);
    background-color: #181818;
    color: white;
    overflow-y: auto;
  }
</style>