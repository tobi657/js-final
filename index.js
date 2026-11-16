async function getBooks() {
  const response = await fetch("https://api.jikan.moe/v4/anime");

  const data = await response.json();

  return data.data;
}

async function displayBooks() {
  const books = await getBooks();

  console.log(books);
}

displayBooks();