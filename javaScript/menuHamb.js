export function menuOpenClosed() {

    const hamburguesa = document.querySelector(".hamburguesa");
    const menuShow = document.querySelector(".menuShow");

    hamburguesa.addEventListener("click", () => {
        if(menuShow.classList.contains("menuShowOn")) {
            menuShow.classList.remove("menuShowOn");
        } else {
            menuShow.classList.add("menuShowOn");
        }
    });
};
