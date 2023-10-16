<script>
import ContainerCard from './partials/ContainerCard.vue';

export default {
  name: "Main",
  components:{
    ContainerCard
  }
}
</script>

<template>
  <main>
    <ContainerCard />
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