import { puntosDeVenta } from "./pVentaList.js";

const zona = document.querySelector("#zona");
const contPVentas = document.querySelector("#contPVentas");

export function clientesDefault() {
    
    const sanjustoDefaul = puntosDeVenta.find(pVenta => pVenta.zona === "San Justo");
    const moronDefaul = puntosDeVenta.find(pVenta => pVenta.zona === "Moron");
    const mataderosDefaul = puntosDeVenta.find(pVenta => pVenta.zona === "Mataderos");
    const ramosDefaul = puntosDeVenta.find(pVenta => pVenta.zona === "Ramos Mejia");

    const arrayDefaul = [sanjustoDefaul, moronDefaul, mataderosDefaul, ramosDefaul];

    arrayDefaul.forEach((pVenta) => {

        const {id, sucursal, direccion, mapa, zona} = pVenta;

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
