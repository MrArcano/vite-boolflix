<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

import { store } from './data/store';

import axios from "../node_modules/axios"

export default {
  name: "App",
  components:{
    Header,
    Main
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getAPI(key){
      axios.get(store.apiUrl + key,{
        params:{
          api_key: store.apiKey,
          language: store.language,
          query: store.query,
        }
      })
      .then((response) => {
        store.apiResponse[key] = response.data;
        console.log(key, store.apiResponse[key]);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getAPI("movie");
    this.getAPI("tv");
  },
}
</script>

<template>
  <Header @startSearch="getAPI('movie'); this.getAPI('tv');" />
  <Main />
</template>

<style lang="scss">
@use "./scss/main.scss"
</style>
