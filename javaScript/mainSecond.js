import { menuOpenClosed, menuOpenProductos} from "./menuHamb.js";
import { curiosidadesSecond } from "./curiosidades/curiosidaes.js"

document.addEventListener("DOMContentLoaded", () => {

    // Abre el menu Hamburgesa
    menuOpenClosed();

    // Abre preoductos de menú hamburguesa
    menuOpenProductos();

    // Imprime las Curiosidaes de la miel
    curiosidadesSecond();
});