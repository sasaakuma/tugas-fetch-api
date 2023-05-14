let genre = document.getElementById("genres")
let listmovie = document.getElementById("listmovies")

// authorization API the movie
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YWI5M2VlN2ZmMzNmZTU5Y2YyZDMyMjZjNWJmMDM1OSIsInN1YiI6IjY0NWI4ZTQ4NzdkMjNiMDEzNjVlZTE3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ye3YILMdWcyTaBJwgM4rTJoKuwee5MYyUiP8puAS5H4'
    }
  };

  // pengambilan API genre
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(data => {
  console.log(data);
  data.genres.forEach(showGenre)
  })

  function showGenre(val,idx) {
    genre.innerHTML += `<div class= "d-grid gap-2 col-6 mx-auto mt-4"> 
    <button onclick="getGenre(${val.id})" class="btn btn-primary" type="button">
    ${val.name}</button></div>`
  }

  //   pengambilan API list movie
  function getGenre(id){
    //Pengambilan API List Movie
    console.log(id)
    fetch ('https://api.themoviedb.org/3/discover/movie?with_genres='+JSON.stringify(id),options)
    .then(response => response.json())
    .then(data => {
        listmovie.innerHTML = ""
        console.log(data);
        data.results.forEach(showListMovie)
    })
}

function showListMovie(val,idx) {
    listmovie.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://image.tmdb.org/t/p/original/${val.poster_path}" class="img-fluid rounded-3 mt-2">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${val.original_title}</h5>
          <p class="card-text">User Score : ${val.vote_average}<br>${val.overview}</p> 
        </div>
      </div>
    </div>
  </div>`
}