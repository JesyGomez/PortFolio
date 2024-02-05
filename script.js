let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono la opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Función que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("reactjs");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("springboot");
        habilidades[6].classList.add("ingles");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("tequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("tremoto");
    }
}
//Función el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}