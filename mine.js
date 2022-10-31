const div = document.querySelector(".block");
div.style.display = "flex";
div.style.flexWrap = "wrap";
div.style.listStyle = "none";
fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
  .then((morg) => morg.json())
  .then((shtern) => {
    console.log(shtern);
    shtern.Search.forEach((alish) => {
      console.log(alish);
      div.innerHTML += `
      <div class='divs'><img  src=${alish.Poster} alt="" /> <h3>${alish.Title}</h3> <h4>Year: ${alish.Year}</h4></div>
      `;
    });
  });
