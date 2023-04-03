import { miel, aceite } from "./curiosidaedesList.js"

export function curiosidadesDeLaMiel() {

    const containerCards = document.querySelector("#contMiel");

    miel.forEach(productos => {

        const { description, img, title, id } = productos;

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
                <a href="pages/second.html#curiosidad${id}">mas..</a>
            </div>
        `;
        containerCards.appendChild(div);
    });
};

export function curiosidadesDelAceite() {

    const containerCards = document.querySelector("#contAceite");

    aceite.forEach(productos => {

        const { description, img, title, id } = productos;

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
                <a href="pages/second.html#curiosidad${id}">mas..</a>
            </div>
        `;

        containerCards.appendChild(div);
    });
};

// Second Pages

export function curiosidadesSecond() {

    miel.forEach(producto => {

        const { id } = producto;

        if (screen.width < 769) {
            imprimeArriba(producto, "miel");
        } else {

            if (id % 2 == 0) {
                imprimeArriba(producto, "miel");
            };

            if (id % 2 != 0) {
                imprimeAbajo(producto, "miel");
            };
        };
    });

    aceite.forEach(producto => {

        const { id } = producto;

        if (screen.width < 769) {
            imprimeArriba(producto, "Aceite");
        } else {

            if (id % 2 == 0) {
                imprimeArriba(producto, "Aceite");
            };

            if (id % 2 != 0) {
                imprimeAbajo(producto, "Aceite");
            };
        };
    });
};

const contMielSecond = document.querySelector("#contMielSecond");
const contAceiteSecond = document.querySelector("#contAceiteSecond");

function imprimeArriba(producto, tipo) {

    const { description, img, title, large, id } = producto;

    const div = document.createElement("div");
    div.classList.add("curiosoLarge");
    div.innerHTML = ` 
        <div class="curiosoLargeA">

            <img src="../${img}" alt=${title}>

            <div class="curiosoLargeInterno">
                <h4 id="curiosidad${id}">${title}</h4>
                <p>${description}</p>
                <p class="curiosoLargeB">${large}</p>     
            </div>
        </div>
    `;
    if (tipo === "miel") {
        contMielSecond.appendChild(div);
    } else {
        contAceiteSecond.appendChild(div);
    }
};

function imprimeAbajo(producto, tipo) {

    const { description, img, title, large, id } = producto;

    const div = document.createElement("div");
    div.classList.add("curiosoLarge");
    div.innerHTML = ` 
        <div class="curiosoLargeA">
    
            <div class="curiosoLargeInterno">
                <h4 id="curiosidad${id}">${title}</h4>
                <p>${description}</p>     
                <p class="curiosoLargeB">${large}</p>
            </div>
    
            <img src="../${img}" alt=${title}>
         </div>
    `;
    if (tipo === "miel") {
        contMielSecond.appendChild(div);
    } else {
        contAceiteSecond.appendChild(div);
    };
};