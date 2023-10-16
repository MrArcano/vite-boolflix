import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiKey: "8c3144caf08ff7ccb880d95e80b23236",
  language: "it_IT",
  query:"one piece",
  apiResponse:{
    movie: null,
    tv: null
  },
  typeFlag: "All",
})