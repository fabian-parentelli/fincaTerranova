export function menuOpenClosed() {

    const hamburguesa = document.querySelector(".hamburguesa");
    const menuShow = document.querySelector(".menuShow");

    hamburguesa.addEventListener("click", () => {
        if(menuShow.classList.contains("menuShowOn")) {
            menuShow.classList.remove("menuShowOn");
        } else {
            menuShow.classList.add("menuShowOn");
        };
    });
};

export function menuOpenProductos() {
    const btnProductos = document.querySelector("#productosNav");
    const arrow = document.querySelector("#arrow");
    const productoModal = document.querySelector("#productoModal");

    btnProductos.addEventListener("click", ()=> {
        arrow.classList.toggle("arrowOn");
        productoModal.classList.toggle("productosModalOn");
    });
};