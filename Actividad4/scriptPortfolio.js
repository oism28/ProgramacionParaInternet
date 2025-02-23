document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", function (event) {
            let isValid = true;
            const inputs = form.querySelectorAll("input, select");
            
            inputs.forEach(input => {
                if (input.type !== "submit" && input.value.trim() === "") {
                    isValid = false;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "";
                }
            });
            
            if (!isValid) {
                event.preventDefault();
                alert("Por favor, complete todos los campos antes de enviar.");
            }
        });
    });
});