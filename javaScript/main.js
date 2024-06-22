import { menuOpenClosed, menuOpenProductos } from "./menuHamb.js";
import { curiosidadesDelAceite, curiosidadesDeLaMiel } from "./curiosidades/curiosidaes.js"
import { puntosVenta } from "./puntosDeVenta.js/pVenta.js";
import { recetasIndex } from "./recetas/recetas.js";
import { mostrarMercado } from "./cart/cartContainer.js";


document.addEventListener("DOMContentLoaded", () => {

    // Abre el menu Hamburgesa
    menuOpenClosed();

    // Abre preoductos de menú hamburguesa
    menuOpenProductos();

    // Curiosidaes de la miel y Aceite
    curiosidadesDeLaMiel();
    curiosidadesDelAceite();

    // Puntos de Ventas
    puntosVenta();

    // recetas.
    recetasIndex();

    // Inputs minorista y mayorista
    mostrarMercado();
});
