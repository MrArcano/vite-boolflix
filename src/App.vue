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
        store.apiResponse = response.data;
        console.log(store.apiResponse.results);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  mounted() {
    this.getAPI(store.apiUrlMovie);
  },
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@use "./scss/main.scss"
</style>
