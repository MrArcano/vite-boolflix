import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  apiKey: "8c3144caf08ff7ccb880d95e80b23236",
  language: "it_IT",
  query:"marvel",
  apiResponse:{
    movie: null,
    tv: null
  },
  apiGenre:{
    movie: null,
    tv: null
  },
  typeFlag: "All",
  selectedGenre:{
    movie: 0,
    tv: 0
  } 
})

// API Trending ALL
// https://api.themoviedb.org/3/trending/all/day?language=it-IT&api_key=8c3144caf08ff7ccb880d95e80b23236

// API Movie genre
// https://api.themoviedb.org/3/genre/movie/list?'
/*
params:{
  language=it
  apiKey: "8c3144caf08ff7ccb880d95e80b23236"
}
*/
// API Tv genre
// https://api.themoviedb.org/3/genre/tv/list?language=it'

// genre_ids
