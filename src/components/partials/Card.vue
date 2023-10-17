<script>
import Vote from './Vote.vue';

export default {
  name: "Card",
  components:{
    Vote
  },
  props:{
    cardObj: Object,
  },
  data() {
    return {
      urlFlag: "",
    }
  },
  methods: {
    existImage(lang){
      if(lang === "en"){
        this.urlFlag = "/flag/en.png";
        return true;
      }
      if(lang === "it"){
        this.urlFlag = "/flag/it.png";
        return true;
      }
    }
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

      <p>{{ cardObj.title || cardObj.name }}</p>
      
      <p>{{ cardObj.original_title || cardObj.original_name }}</p>

      <p>
        <span>original language	:	</span>
        <img class="flag" v-if="existImage(cardObj.original_language)" :src="urlFlag" :alt="cardObj.original_language">
        <span v-else>{{ cardObj.original_language }}</span>
      </p>
      

      <p>vote_average	:	{{ cardObj.vote_average / 2 }}</p>
      <Vote :vote="cardObj.vote_average" :cardID="cardObj.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-csm{
  position: relative;
  overflow: hidden;
  cursor: pointer;

  width: 220px;

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
    transition: all 0.5s ease-in 0s;

    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .flag{
      height: 20px;
      border-radius: 2px;
    }
  }
}
</style>