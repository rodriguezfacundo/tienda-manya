function irArriba(pxPantalla){
    window.addEventListener("scroll", () => {
        let scroll = document.documentElement.scrollTop;
        let botonArriba = document.getElementById("botonArriba");

        if(scroll > 700) {
            botonArriba.style.right = 20 + "px";
        } else {
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba(750);