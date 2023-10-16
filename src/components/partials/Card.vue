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
    <img :src="`https://image.tmdb.org/t/p/w342${cardObj.poster_path}`" alt="">
    <div class="hover-csm">
      <p>name	:	{{ cardObj.title }}</p>
      <p>original_name	:	{{ cardObj.original_title }}</p>
      <p>original_language	:	{{ cardObj.original_language }}</p>
      <p>vote_average	:	{{ cardObj.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-csm{
  position: relative;
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