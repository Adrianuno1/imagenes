const menuHamburguesa = document.querySelector(".icon_menu");

const menuDespegable = document.querySelector(".menu_desplegable")

const botonCerrar = document.querySelector(".btn_cerrar")

let click = 0


function ocultar (){
    menuDespegable.style.display = "flex"
    menuDespegable.classList.add("animate__animated", "animate__slideInRight")
    console.log("se dio click de nuevo")
    menuDespegable.classList.remove("animate__animateda", "animate__slideOutRight")
};

function botoncerrar(){
    menuDespegable.classList.add("animate__animated", "animate__slideOutRight");
}