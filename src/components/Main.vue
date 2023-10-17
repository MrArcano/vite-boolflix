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
    <div v-if="store.apiResponse.movie && store.apiResponse.tv">

      <div v-if="store.apiResponse.movie.total_results === 0 && store.apiResponse.tv.total_results === 0" class="not-found">
        <p>Not Found!</p>
      </div>
      <div v-else>
        <ContainerCard v-if="store.typeFlag !== 'Serie'" title="Film" type="movie" />
        <ContainerCard v-if="store.typeFlag !== 'Film'" title="Serie TV" type="tv"/>
      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
  main{
    height: calc(100vh - 60px);
    background-color: #181818;
    color: white;
    overflow-y: auto;
    >div{
      height: 100%;
    }
  }
</style>