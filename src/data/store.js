import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiKey: "8c3144caf08ff7ccb880d95e80b23236",
  language: "it_IT",
  query:"marvel",
  apiResponse:{
    movie: null,
    tv: null
  },
  typeFlag: "All",
})

// https://api.themoviedb.org/3/trending/all/day?language=it-IT&api_key=8c3144caf08ff7ccb880d95e80b23236
