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
  setup() {
    return {
      modules: [Navigation, Mousewheel, Keyboard],
    };
  },
}
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
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
        <swiper-slide v-for="card in store.apiResponse[type].results" :key="card.id">
          <Card :cardObj="card" />
        </swiper-slide>

      </swiper>

    </div>
  </div>
</template>

<style lang="scss">
.container{
  padding: 16px;
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