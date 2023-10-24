
let menu = document.getElementById("iMenuItens")

function alterarTamanho(){
    if (window.innerWidth >= 895){
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

function exibirMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}