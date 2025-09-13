document.addEventListener('DOMContentLoaded', function() { //espera que el documento este cargado
    const form = document.getElementById('empresaForm');
    const containerForm = document.getElementById('containerForm'); //obtiene elementos a traves de sus id's

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // evita envío real

        // Reemplaza el contenido del container con el mensaje de agradecimiento
        containerForm.innerHTML = `
            <div class="card-agradecimiento">
                <h1>Gracias por tu interés<br>
                Miles de trabajadores están interesados en trabajar contigo.<br>
                Nos contactaremos a la brevedad.</h1>
            </div>
        `;

        containerForm.style.display = 'flex';
        containerForm.style.justifyContent = 'center';
        containerForm.style.alignItems = 'center'; //estilos para el container
        containerForm.style.flexDirection = 'column';
        containerForm.style.marginTop = '5vh';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("empresaForm");
    const nombreEmpresa = document.getElementById("nombreEmpresa"); //obtiene elementos en este caso los input a traves de ids
    const correo = document.getElementById("correo");
    const descripcion = document.getElementById("descripcion");

    const validarNombre = () => {
        const errorSpan = nombreEmpresa.nextElementSibling;
        if (nombreEmpresa.value.trim().length < 3) {
            errorSpan.textContent = "El nombre debe tener al menos 3 caracteres."; //si hay menos de 3 caracter en el input arroja error
            return false;
        }
        errorSpan.textContent = "";
        return true;
    };

    const validarCorreo = () => {
        const errorSpan = correo.nextElementSibling;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(correo.value.trim())) {
            errorSpan.textContent = "Ingrese un correo válido."; //ve que el correo tenga los carcteres de un correo @ y .
            return false;
        }
        errorSpan.textContent = "";
        return true;
    };

    const validarDescripcion = () => {
        const errorSpan = descripcion.nextElementSibling;
        if (descripcion.value.trim().length < 10) {
            errorSpan.textContent = "La descripción debe tener al menos 10 caracteres."; //pide 10 caracteres como minimo al describir el puesto de trabajo
            return false;
        }
        errorSpan.textContent = "";
        return true;
    };

    // Validación en tiempo real
    nombreEmpresa.addEventListener("input", validarNombre);
    correo.addEventListener("input", validarCorreo);
    descripcion.addEventListener("input", validarDescripcion);

});