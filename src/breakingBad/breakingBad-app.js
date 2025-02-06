const fetchQuote = async () => {
  const url = "https://api.breakingbadquotes.xyz/v1/quotes";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error presentado: ", error);
  }
};

export const BreakingBadApp = async (element) => {
  document.querySelector(".app-title").innerHTML = "Breaking Bad App";
  element.innerHTML = "Loading... <br/>";
  const button = document.createElement("button");
  button.textContent = "refres";
  element.append(button);

  button.addEventListener("click", async () => {
    element.innerHTML = "Loading... ";
    const data = await fetchQuote();
    const { quote, author } = data[0];
    renderQuote(quote, author, element);

    element.append(button);
  });
};

const renderQuote = (quote, author, element) => {
  const html = `
    <p>${quote}<p/><br/>
    <h3>${author}<h3/>
    `;
  element.innerHTML = html;
};
