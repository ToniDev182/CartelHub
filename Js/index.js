/* Nos da el contenido del div que contiene por id banners */

/* array de nombre de los archivos de los banners  */
var image = ["ElClubDeLaLucha", "LaNiebla", "LaTrampa", "scottpilgrim", "Soul"];
/* Esta variable define i como el tamaño del array de imagenes */
var i = image.length;
/* En la siguiente funcion iteramos sobre i */
function nextImage() {
    var slider_content = document.getElementById("banners");
    /* si i (5)[la primera vez] < (5)[tamaño del array] no se cumple*/
    if (i < image.length) {
        /* 0 +1 la segunda vez */
        i = i + 1;
        if (i == image.length) {
            /* si i igual a 5 volvemos a iniciar la variable para recorrerla si es igual a 5 */
            i = 0;
        }
        /* la primera vez saltamos aqui, y pasamos el valor de i a 0 */
    } else {
        i = 0;
    }
    /* siempre pase lo que pase cambia el contenido de la imagen por la imagen que toque segun el valor de i */
    /* la variable slider_content trae del html el div con el id=banners y modifica el contenido interno con innerHTL para cambiar la imagen a la que nos estamos refiendo*/
    /* que seria imagen i, la que toque dentro del bucle de arriba  */
    slider_content.innerHTML = "<img  class=\"imagenes-banners\" src=assets/banners/" + image[i] + ".jpg>";
}

/*  en este caso es igual que el anterior pero para ir hacia atras, con la difencia de que en la funcion setInterval('beforeImage()', 3000); no existe y no hay bucle  */
function beforeImage() {
    var slider_content = document.getElementById("banners");
    if (i < image.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = image.length;
    }
    slider_content.innerHTML = "<img  class=\"imagenes-banners\" src=assets/banners/" + image[i - 1] + ".jpg>";
}