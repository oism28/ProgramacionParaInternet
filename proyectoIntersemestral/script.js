// Función para actualizar la fecha y hora actual
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('current-date-time').textContent = now.toLocaleDateString('es-ES', options);
}

// Actualiza la fecha y hora cada segundo
updateDateTime();
setInterval(updateDateTime, 1000);

// Inicializa el slider cuando el documento esté listo
$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        pause: 5000,
        autoHover: true,
        responsive: true,
        pager: true,
        controls: true
    });
    
    // Botón de volver arriba
    $('#back-to-top').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });
});
