// Selecting the necessary elements
const btn = document.querySelector("button");
let quote = document.querySelector(".quote");
let author = document.querySelector("#author");
const spinner = document.querySelector("#spinner");
const content = document.querySelector("#quote-person");
const loadText = document.querySelector(".load-text");

// The API URL for fetching data
const api_url =
  "https://animechan.vercel.app/api/random/anime?title=Attack On Titan";

// Function to fetch data from the API
function getApi() {
  // Disable the button to prevent multiple API calls
  btn.disabled = true;

  // Show the spinner and loading text, and hide the content
  spinner.style.display = "block";
  loadText.style.display = "block";
  content.style.display = "none";

  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      // Extract the quote and author from the API data
      const apiQuote = data.quote;
      const apiAuthor = data.character;

      // Update the DOM with the quote and author
      quote.innerText = apiQuote;
      author.innerText = apiAuthor;

      // Hide the spinner and loading text, and show the content
      spinner.style.display = "none";
      loadText.style.display = "none";
      content.style.display = "block";

      // Enable the button after data is fetched and DOM is updated
      btn.disabled = false;
    })
    .catch((error) => {
      // Log any errors to the console
      console.log(error);

      // Enable the button even if there's an error
      btn.disabled = false;
    });
}

// Attach the click event listener to the button
btn.addEventListener("click", getApi);

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    // If the space key is pressed, simulate a click on the button
    btn.click();
  }
});
