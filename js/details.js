const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")){
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const charactersUrl = "https://rickandmortyapi.com/api/character/";
const detailUrl = `${charactersUrl}${id}`;

// Add class 'hidden' to detail container
const detailContainer = document.querySelector(".detail-container");
detailContainer.classList.add("hidden");

// Make new element, add class and add loader to container 
const container = document.querySelector(".container");
const loader = document.createElement("div");

container.appendChild(loader);
loader.classList.add("loader");


fetch(detailUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        createCharacter(json);
    })
    .catch(function(){
        document.location.href = "error.html";
    });


function createCharacter(json){
    console.dir(json);

    // Removes loader
    container.removeChild(loader);

    // Removes class 'hidden'
    detailContainer.classList.remove("hidden");

    // Adds detail information to the details page
    const image = document.querySelector(".details-image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const status = document.querySelector("#status");
    status.innerHTML = json.status;

    const species = document.querySelector("#species");
    species.innerHTML = json.species;

    const origin = document.querySelector("#origin");
    origin.innerHTML = json.origin.name;

    const location = document.querySelector("#location");
    location.innerHTML = json.location.name;

    document.title = json.name; 

}
