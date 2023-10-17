<script>
import Star from './Star.vue';
export default {
  name: "Vote",
  components:{
    Star
  },
  props:{
    vote: Number,
    cardID: Number
  },
  methods: {
    perc(num){
      let perc = this.vote / 2;
      let output = 0;
      if (perc >= num){
        output = 100;
      }else{
        output = (perc - num + 1) * 100;
        if(output < 0){
          output = 0;
        }
      }
      return output
    }
  },
  
}

</script>

<template>
  <div>

    <Star v-for="(starIndex) in 5" :key="starIndex + cardID" :percStar="perc(starIndex)" :nstar=starIndex :cardID=cardID />

  </div>
</template>

<style lang="scss" scoped>
  div{
    display: flex;
  }
</style>