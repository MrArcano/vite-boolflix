import { reactive } from "vue";

export const store = reactive({
  // https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
  apiUrlTv: "https://api.themoviedb.org/3/search/tv",
  apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
  apiKey: "8c3144caf08ff7ccb880d95e80b23236",
  language: "it_IT",
  query:"",
  apiResponse:{
    movie: {},
    tv: {}
  },
  typeFlag: "All",
})