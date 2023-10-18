<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import Card from './Card.vue';

import { store } from '../../data/store';

export default {
  name: "ContainerCard",
  components:{
    Card,
    Swiper,
    SwiperSlide,
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
  methods: {
    getArrayCard(){
      // Array Base
      // store.apiResponse[type].results

      // Genere selezionato
      // store.selectedGenre[type]

      let newArray = []
      if (store.selectedGenre[this.type] == 0){
        newArray = store.apiResponse[this.type].results;
      }else{
        newArray = store.apiResponse[this.type].results.filter((cardt)=>{ 
          return cardt.genre_ids.includes(store.selectedGenre[this.type])
        })
      }
      return newArray;
    }
  },
  setup() {
    return {
      modules: [Navigation, Mousewheel, Keyboard],
    };
  },
}
</script>

<template>
  <div class="container">
    <div class="filter">
      <h1>{{ title + store.selectedGenre[type] }}</h1>
      <select v-if="store.apiGenre[type]" v-model="store.selectedGenre[type]" class="form-select">
        <option value="0">Genere</option>
        <option v-for="genre in store.apiGenre[type].genres" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
      </select>
    </div>
    
    <div v-if="store.apiResponse[type].total_results === 0" class="not-found">
        <p>Not Found!</p>
    </div>
    <div class="container-swipe" v-else>

      <swiper
        :slidesPerView="5"
        :spaceBetween="30"
        :navigation="true"
        :centeredSlides="false"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="card in getArrayCard()" :key="card.id">
          <Card :cardObj="card" />
        </swiper-slide>

      </swiper>

    </div>
  </div>
</template>

<style lang="scss">
.container{
  padding: 16px;
  .filter{
    height: 48px;
    margin: 8px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
      margin: 0;
    }
    select{
      width: 30%;
    }
  }
}
.container-swipe{
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    padding: 0 28px;
    .swiper{
      overflow: initial;
    }
    .swiper-button-prev{
      left: -30px;
    }
    .swiper-button-next{
      right: -30px;
    }
    .swiper-button-next::after,
    .swiper-button-prev::after{
      font-size: 24px;
        font-weight: bold;
        color: #db202c;
    }
  }


</style>