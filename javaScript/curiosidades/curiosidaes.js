import { miel, aceite } from "./curiosidaedesList.js"

export function curiosidadesDeLaMiel() {

    const containerCards = document.querySelector("#contMiel");

    miel.forEach(productos => {

        const { description, img, title} = productos;

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <div class="face front">
                <img src=${img} alt=${title}>
                <h3>${title}</h3>
            </div>

            <div class="face back">
                <p>${description}</p>
                <div class="separador"></div>
                <a href="pages/second.html">mas..</a>
            </div>
        `;

        containerCards.appendChild(div);
    });
};

export function curiosidadesDelAceite() {

    const containerCards = document.querySelector("#contAceite");

    aceite.forEach(productos => {

        const { description, img, title} = productos;

        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <div class="face front">
                <img src=${img} alt=${title}>
                <h3>${title}</h3>
            </div>

            <div class="face back">
                <p>${description}</p>
                <div class="separador"></div>
                <a href="pages/second.html">mas..</a>
            </div>
        `;

        containerCards.appendChild(div);
    });
};