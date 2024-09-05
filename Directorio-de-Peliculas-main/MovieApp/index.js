//Usaremos una API para cargar nuestras peliculas

//usaremo the movie db API
//tenemos que conseguir una API Key

//https://developer.themoviedb.org/docs/getting-started

//API LINK

const APILINK="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ad384f4f8a1a1c2667966b7b4ad3bf1f&page=1";
const IMG_PATH="https://image.tmdb.org/t/p/w1280";
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=ad384f4f8a1a1c2667966b7b4ad3bf1f&query=";

//traeremos la seccion desde html

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

//creamos una funcion para devolver las peliculas

returnMovies(APILINK);



function returnMovies(url){
    fetch(url).then(res=>res.json())
    .then(function(data){
        console.log(data.results);

        data.results.forEach(element => {
            //creamos todos los elementos de la pagina
            const div_card =document.createElement('div'); //creando un elemento div
            div_card.setAttribute('class','card');

            const div_row =document.createElement('div');
            div_row.setAttribute('class','row'); 
            
            const div_column =document.createElement('div');
            div_column.setAttribute('class','column');
            
            const image =document.createElement('img');
            image.setAttribute('class','thumbnail');
            image.setAttribute('id','image');
            
            const title =document.createElement('h3');
            title.setAttribute('id','title');
            
            const center =document.createElement('center');
        

            //damos la estructura de la pagina
            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(title);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);

            main.appendChild(div_row);
        });
    });

    form.addEventListener("submit",(e)=>{

        //setea por default todo en blanco
        e.preventDefault();
        main.innerHTML = "";

        const searchItem = search.value;

        if(searchItem){
            returnMovies(SEARCHAPI + searchItem);
            search.value="";
        }

    })
}