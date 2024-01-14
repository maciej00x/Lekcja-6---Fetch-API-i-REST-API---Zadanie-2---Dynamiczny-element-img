document.getElementById("getGoat").addEventListener("click", async function () {
  try {
    // Adres do miejsca z kózka z określonymi wymiarami
    const goatUrl = "https://placegoat.com/300/200";

    // Stworzenie elementu <img>
    const imgElement = document.createElement("img");

    // Ustawienie atrybutów dla elementu <img>
    imgElement.src = goatUrl;
    imgElement.setAttribute("data-test", "img-goat");

    // Dodanie elementu <img> do drzewa DOM
    document.body.appendChild(imgElement);

    // Ustawienie didRequest na true po wykonaniu requestu
    didRequest = true;
  } catch (error) {
    console.error("Error GOAT", error);
  }
});
