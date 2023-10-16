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
    <div v-if="store.apiResponse.movie.total_results != 0">
      <ContainerCard v-if="store.typeFlag !== 'Serie'" :ObjList="store.apiResponse.movie" :title="'Film'" />
      <ContainerCard v-if="store.typeFlag !== 'Film'" :ObjList="store.apiResponse.tv" :title="'Serie TV'"/>
    </div>
    <div v-else class="not-found">
      <p>Not Found!</p>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
    height: calc(100vh - 60px);
    background-color: #181818;
    color: white;
    overflow-y: auto;
    .not-found{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 2rem;
    }
  }
</style>