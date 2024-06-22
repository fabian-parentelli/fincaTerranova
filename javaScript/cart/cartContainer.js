const carritoPointer = document.querySelector('#carritoPointer');

export function mostrarMercado() {
    carritoPointer.innerHTML = `
        <label>Minorista</label>
        <input type="radio" name="mercado" value="minorista"/>

        <label>Myorista</label>
        <input type="radio" name="mercado" value="mayorista"/>
    `;
    valorMercado();
};

function valorMercado() {
    const opciones = document.getElementsByName('mercado');
    let valorSeleccionado;

    for (let i = 0; i < opciones.length; i++) {
        opciones[i].addEventListener('change', function () {
            if (this.checked) {
                valorSeleccionado = this.value;
                console.log(valorSeleccionado);
            };
        });
    };
};

