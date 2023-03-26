import { menuOpenClosed, menuOpenProductos} from "./menuHamb.js";
import { curiosidadesDelAceite, curiosidadesDeLaMiel } from "./curiosidades/curiosidaes.js"

document.addEventListener("DOMContentLoaded", () => {

    // Abre el menu Hamburgesa
    menuOpenClosed();

    // Abre preoductos de menú hamburguesa
    menuOpenProductos();

    // Curiosidaes de la miel y Aceite
    curiosidadesDeLaMiel();
    curiosidadesDelAceite();
})
