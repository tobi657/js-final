const animeWrapper = document.querySelector(".anime-wrapper");
async function getAnime() {
  const response = await fetch("https://kitsu.io/api/edge/anime");

  const data = await response.json();

  return data.data;
}

async function displayAnime() {
  const anime = await getAnime();

  console.log(anime);

  animeWrapper.innerHTML = anime.map(anime => `
    <div class="anime-card">
    <img src="${anime.attributes.posterImage?.original}" alt="${anime.attributes.canonicalTitle}">
      <h2>${anime.attributes.canonicalTitle}</h2>
      <p>${anime.attributes.description}</p>
    </div>
  `).join("");
}

displayAnime();