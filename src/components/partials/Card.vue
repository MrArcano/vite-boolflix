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
      arrayFlag:["en","it"],
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

      <p v-if="cardObj.title !== cardObj.original_title || cardObj.name !== cardObj.original_name">{{ cardObj.title || cardObj.name }}</p>
      <p>{{ cardObj.original_title || cardObj.original_name }}</p>

      <p>
        <span>language	:	</span>

        <img
          class="flag"
          v-if="arrayFlag.includes(cardObj.original_language)"
          :src="'/flag/'+cardObj.original_language+'.png'"
          :alt="cardObj.original_language">

        <span v-else>{{ cardObj.original_language }}</span>
      </p>
      

      <p>vote_average	:	{{ (cardObj.vote_average / 2).toFixed(2) }}</p>
      <Vote :vote="cardObj.vote_average" :cardID="cardObj.id" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-csm{
  position: relative;
  cursor: pointer;

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
    justify-content: center;

    p{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .flag{
      height: 15px;
      border-radius: 2px;
    }

  }
}
</style>