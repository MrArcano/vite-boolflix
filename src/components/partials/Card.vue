<script>
export default {
  name: "Card",
  props:{
    cardObj: Object,
  }
}
</script>

<template>
  <div class="card-csm">
    <div class="poster">
      <img v-if="cardObj.poster_path" :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`" alt="">
      <img v-else src="/public/image-not-found-scaled-1150x647.png" alt="image-not-found">
    </div>
    <div class="hover-csm">

      <p v-if="cardObj.title">name	:	{{ cardObj.title }}</p>
      <p v-else>name	:	{{ cardObj.name }}</p>

      <p v-if="cardObj.original_title">original_name	:	{{ cardObj.original_title }}</p>
      <p v-else>original_name	:	{{ cardObj.original_name }}</p>

      <p>original_language	:	{{ cardObj.original_language }}</p>
      <p>vote_average	:	{{ cardObj.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-csm{
  position: relative;

  .poster{
    width: 200px;
    img{
      object-fit: cover;
      aspect-ratio: 2/3;
    }
  }
  .hover-csm{
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);

    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    &:hover{
      opacity: 1;
    }
  }
}
</style>