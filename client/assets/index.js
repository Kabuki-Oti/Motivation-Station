async function displayQuote() {

  const response = await fetch("http://localhost:3000/quotes/random");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const quote = await response.json();
  console.log(quote);

  const textElement = document.querySelector("#text");
  const authorElement = document.querySelector("#author");

  textElement.textContent = quote.text;
  authorElement.textContent = quote.author;
}


async function createNewQuote(e) {

  e.preventDefault();

  const data = {
    text: e.target.name.value,
    author: e.target.author.value
  }

  let ms = document.querySelector("#message")

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

  const response = await fetch("http://localhost:3000/quotes", options);

  if (response.status === 201) {
    e.target.name.value = ''
    e.target.author.value = ''
    ms.textContent = "Quote added."
    setTimeout(() => {
      ms.textContent = ''
    }, 4000)
  }
}

const form = document.querySelector("#create-form");
form.addEventListener("submit", createNewQuote);

const randomiseButton = document.querySelector("#btn-randomise");
randomiseButton.addEventListener('click', displayQuote);
