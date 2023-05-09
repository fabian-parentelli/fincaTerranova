import { recetas } from "./recetasList.js";

const input = document.querySelector('input');

const nameRecipe = document.querySelector('#nameRecipe');

export function recetasIndex() {

    recetas.forEach((producto) => {
    
        const { url, id} = producto;
    
        const img = document.createElement('img');
        img.src = url;
        img.id = id;
        img.style.cursor = 'pointer';

        input.after(img);
    });  

    const imagen31 = document.getElementById('31');
    const imagen32 = document.getElementById('32');
    const imagen33 = document.getElementById('33');
    const imagen34 = document.getElementById('34');
    const imagen35 = document.getElementById('35');
    const imagen36 = document.getElementById('36');
    const imagen37 = document.getElementById('37');
    const imagen38 = document.getElementById('38');
    
    mostrarTitle(imagen31, 31);
    mostrarTitle(imagen32, 32);
    mostrarTitle(imagen33, 33);
    mostrarTitle(imagen34, 34);
    mostrarTitle(imagen35, 35);
    mostrarTitle(imagen36, 36);
    mostrarTitle(imagen37, 37);
    mostrarTitle(imagen38, 38);
};

function mostrarTitle(title, id) {

    title.onmouseover = () => {
        nameRecipe.classList.add('nameRecipeModal');
        buscarTitle(id);
    }
    title.onmouseout = () => {
        nameRecipe.classList.remove('nameRecipeModal');
    };

    title.addEventListener('click', () => {
        window.location.href = `pages/second.html#${id}`;
    });
};

function buscarTitle(id) {
    const busquedaTitle = recetas.find(receta => receta.id === id);
    
    const { name } = busquedaTitle;
    
    limpiarHTML();

    const title = document.createElement('p');
    title.className = 'nameTitle';
    title.innerText = name;

    nameRecipe.appendChild(title);
};


function limpiarHTML() {
    while (nameRecipe.firstChild) {
        nameRecipe.removeChild(nameRecipe.firstChild);
    };
};

// Second page

export function recipes() {

    const contHoney = document.querySelector('#contRecipesHoney');
    const contOil = document.querySelector('#contRecipesOil');

    recetas.forEach((recipes) => {

        const { id, name, family, ingredients, elaboration, url } = recipes;

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="cardRecipes" id=${id}>
                <img src="../${url}" alt=${name}>
                <div>
                    <h4>${name}</h4>
                    <p class="ingredient">${ingredients}</p>
                    <p>${elaboration}</p>
                </div>
            </div>
        `;
        if(family === 'honey') {
            contHoney.appendChild(div);
        }
        if(family === 'oil') {
            contOil.appendChild(div);
        };
    });
};