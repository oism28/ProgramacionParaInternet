$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            width: '300px'
        });
    });
});