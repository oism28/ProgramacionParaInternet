$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            width: '300px'
        });
    });
});

$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            width: '300px',
            opacity: '0.2'
        });
    });
});

$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            width: '300px',
            opacity: '0.2'},
            3000);
        });
    });

$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            width: '300px',
            opacity: '0.2'
        },3000, function(){
            alert ('Fin de la animación');
        });
    });
});

$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            width: '+=50px'
        },1000, function(){
            //alert ('Fin de la animación');
        });
    });
});

$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            margin: '+=20px'
        },1000, function(){
        //alert ('Fin de la animación');
        });
    });
});

$(document).ready(function(){
    // $(selector).animate({parametros}, velocidad, callback);
    $('#boton').on('click', function(){
        $('#caja').animate({
            marginLeft: '+=50px'
        },500, function(){
        //alert ('Fin de la animación');
        });
    });
});
