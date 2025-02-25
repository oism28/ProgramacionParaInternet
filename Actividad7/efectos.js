$(document).ready(function(){
    function efecto(){
        $('.caja1').hide(3000);
    }
    efecto();
});

$(document).ready(function(){
    function efecto(){
        $('.caja1').fadeOut(3000);
    }
    efecto();
});

$(document).ready(function(){
    function efecto(){
        $('.caja1').hide();
        $('.caja1').fadeIn(4000);
    }
    efecto();
});

$(document).ready(function(){
    function efecto(){
        $('.caja1').hide();
        $('.caja1').toggle(4000);
    }
    efecto();
});

$(document).ready(function(){
    function efecto(){
        $('.caja1').show();
        $('.caja1').toggle(4000);
    }
    efecto();
});

$(document).ready(function(){
    function efecto(){
        $('.caja1').slideUp(2000);
    }
    efecto();
});

$(document).ready(function(){
    function efecto(){
        $('.caja1').hide();
        $('.caja1').slideDown(2000);
    }
    efecto();
});