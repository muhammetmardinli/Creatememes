document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const cardTitle = document.querySelector(".card-title");
    const cardText = document.querySelector(".card-text");

    const updateDetails = (url, memeTitle, memeAuthor) => {
        const image = document.querySelector(".card-img-top");
        const author = document.querySelector(".card-author");

        image.setAttribute("src", url);
        cardTitle.textContent = memeTitle;
        author.textContent = `Meme by: ${memeAuthor}`;
    };

    const generateMeme = () => {
        fetch("https://meme-api.com/gimme/wholesomememes")
            .then((response) => response.json())
            .then((data) => {
                updateDetails(data.url, data.title, data.author);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    generateBtn.addEventListener("click", generateMeme);
});
