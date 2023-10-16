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
      axios.get(apiUrl,{
        params:{
          api_key: store.apiKey,
          language: store.language,
          query: store.query,
        }
      })
      .then((response) => {
        if(apiUrl.includes("/movie")){
          store.apiResponse.movie = response.data;
          console.log(store.apiResponse.movie);
        }
        if(apiUrl.includes("/tv")){
          store.apiResponse.tv = response.data
          console.log(store.apiResponse.tv);
        }
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
  <Header @startSearch="getAPI(store.apiUrlMovie); this.getAPI(store.apiUrlTv);" />
  <Main />
</template>

<style lang="scss">
@use "./scss/main.scss"
</style>
