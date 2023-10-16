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
    getAPI(apiUrl){
      console.log(store.query);
      console.log("API");
      axios.get(apiUrl,{
        params:{
          api_key: store.apiKey,
          language: store.language,
          query: store.query,
        }
      })
      .then((response) => {
        console.log(response.data);
        if(apiUrl.includes("movie")){
          console.log("movie");
          store.apiResponseMovie = response.data;
        }
        if(apiUrl.includes("tv")){
          console.log("tv");
          store.apiResponseTv = response.data;
        }
        console.log(store.apiResponseMovie);
        console.log(store.apiResponseTv);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getAPI(store.apiUrlMovie);
    this.getAPI(store.apiUrlTv);
  },
}
</script>

<template>
  <Header @startSearch="console.log('EMIT'); getAPI(store.apiUrlMovie)" />
  <Main />
</template>

<style lang="scss">
@use "./scss/main.scss"
</style>
