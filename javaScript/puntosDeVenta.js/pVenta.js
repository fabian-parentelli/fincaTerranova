import { puntosDeVenta } from "./pVentaList.js";

const zona = document.querySelector("#zona");
const contPVentas = document.querySelector("#contPVentas");

export function clientesDefault() {
    
    const sanjustoDefaul = puntosDeVenta.find(pVenta => pVenta.sucursal === "Granja Magnas");
    const moronDefaul = puntosDeVenta.find(pVenta => pVenta.sucursal === "Pescadería Mar de Plata");
    const mataderosDefaul = puntosDeVenta.find(pVenta => pVenta.sucursal === "Dietética del Valle");
    const ramosDefaul = puntosDeVenta.find(pVenta => pVenta.sucursal === "Dietética Rojas");

    const arrayDefaul = [sanjustoDefaul, moronDefaul, mataderosDefaul, ramosDefaul];

    arrayDefaul.forEach((pVentaDef) => {

        const {id, sucursal, direccion, mapa, zona} = pVentaDef;

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
    });
};