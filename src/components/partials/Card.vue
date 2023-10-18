<script>
import axios from 'axios';
import Vote from './Vote.vue';
import { store } from '../../data/store';

export default {
  name: "Card",
  components:{
    Vote
  },
  props:{
    cardObj: Object,
    type: String
  },
  data() {
    return {
      store,
      arrayFlag:["en","it"],
      castArray: [],
    }
  },
  methods: {
    // Get API actor cast
    getAPIcast(key){
      axios.get(store.apiUrl + key + "/" + this.cardObj.id + "/credits",{
        params:{
          api_key: store.apiKey,
          language: store.language,
        }
      })
      .then((response) => {
        this.castArray = response.data.cast;
        if(this.castArray.length > 5){
          this.castArray.length = 5;
        }
      })
      .catch((error) => {
        console.log(error);
      })
    },
  },
  mounted() {
    this.getAPIcast(this.type);
  },
}
</script>

<template>
  <div class="card-csm">
    <div class="poster">
      <img v-if="cardObj.poster_path" :src="`https://image.tmdb.org/t/p/w300${cardObj.poster_path}`" alt="">
      <img v-else src="/image-not-found-scaled-1150x647.png" alt="image-not-found">
    </div>
    <div class="hover-csm">

      <p>{{ cardObj.id }}</p>

      <p class="ellipsis" v-if="cardObj.title !== cardObj.original_title || cardObj.name !== cardObj.original_name">{{ cardObj.title || cardObj.name }}</p>
      <p class="ellipsis">{{ cardObj.original_title || cardObj.original_name }}</p>

      <p>
        <span>language : </span>

        <img
          class="flag"
          v-if="arrayFlag.includes(cardObj.original_language)"
          :src="'/flag/'+cardObj.original_language+'.png'"
          :alt="cardObj.original_language">

        <span v-else>{{ cardObj.original_language }}</span>
      </p>
      
      <p>vote_average	:	{{ (cardObj.vote_average / 2).toFixed(2) }}</p>
      <Vote :vote="cardObj.vote_average" :cardID="cardObj.id" />

      <h5 class="text-center mt-3">Description</h5>
      <p class="description">
        {{ cardObj.overview }}
        <ul>
          <li v-for="cast in castArray" :key="cast.id">{{ cast.name }}</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-csm{
  position: relative;
  font-size: 0.8rem;

  &:hover .hover-csm{
      transform: translateY(0);
    }

  .poster{
    img{
      object-fit: cover;
      aspect-ratio: 2/3;
    }
  }
  .hover-csm{
    transform: translateY(100%);
    transition: transform 0.5s ease-in 0s;

    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    padding: 16px;
    display: flex;
    flex-direction: column;

    p{
      margin: 0;
    }

    .ellipsis{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
    }

    .description{
      overflow-y: auto;
      scrollbar-width: thin;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      overscroll-behavior: auto none;

      // Google scrollbar
      &::-webkit-scrollbar{
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }

      &::-webkit-scrollbar-thumb {
        background: #888; 
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
    }


    .flag{
      height: 15px;
      border-radius: 2px;
    }

  }
}
</style>