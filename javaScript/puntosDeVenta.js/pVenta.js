import { puntosDeVenta } from "./pVentaList.js";

const zona = document.querySelector("#zona");
const contPVentas = document.querySelector("#contPVentas");

function filtro() {
    
    zona.addEventListener("change", (e) => {
        const zonaChange = e.target.value;        
        const busqueda = puntosDeVenta.filter(pVenta => pVenta.zona === zonaChange);
        limpiarHTML();
        busqueda.forEach(pVenta => imprimirPuntosVenta(pVenta));
    });
};

export function puntosVenta() {
    
    if(!filtro()) {
        zonaDefaultbusqueda();
    } else {
        filtro();
    };
};

function zonaDefaultbusqueda() {
    puntosDeVenta.forEach((pVenta) => {

        if(pVenta.default === true) {
            imprimirPuntosVenta(pVenta);
        };
    });
};

function imprimirPuntosVenta(pVenta) {
    
    const {sucursal, direccion, mapa, zona} = pVenta;

    const div = document.createElement("div");
    div.classList.add("cardPVenta");
    div.innerHTML = `
        <div>
            <h4>${sucursal}</h4>
            <P>${direccion}</P>
            <P>${zona}</P>
        </div>

        <iframe src="${mapa}"></iframe>
    `;
    contPVentas.appendChild(div);
};

function limpiarHTML() {
    while (contPVentas.firstChild) {
        contPVentas.removeChild(contPVentas.firstChild);
    };
};