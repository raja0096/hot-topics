const container = document.querySelector("#container");
const links = document.querySelectorAll(".navigation");
let url = "partials/home.html";
const loadContent = (urlFeed) => {
    fetch(urlFeed)

        .then((response) => {
        return response.text();
        })

        .then((data) => {
            container.innerHTML = data;
        })

        .catch((error) => {
            console.error("Error fetching content: ", error);
        });
};

const selectContent = (event) => {
    event.preventDefault();
    url = event.target.href;
    loadContent(url);
};

loadContent(url);
links.forEach((link) => {
link.addEventListener("click", selectContent);
});
