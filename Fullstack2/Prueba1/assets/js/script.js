document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('empresaForm');
    const containerForm = document.getElementById('containerForm');

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
        containerForm.style.alignItems = 'center';
        containerForm.style.flexDirection = 'column';
        containerForm.style.marginTop = '5vh';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("empresaForm");
    const nombreEmpresa = document.getElementById("nombreEmpresa");
    const correo = document.getElementById("correo");
    const descripcion = document.getElementById("descripcion");

    const validarNombre = () => {
        const errorSpan = nombreEmpresa.nextElementSibling;
        if (nombreEmpresa.value.trim().length < 3) {
            errorSpan.textContent = "El nombre debe tener al menos 3 caracteres.";
            return false;
        }
        errorSpan.textContent = "";
        return true;
    };

    const validarCorreo = () => {
        const errorSpan = correo.nextElementSibling;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(correo.value.trim())) {
            errorSpan.textContent = "Ingrese un correo válido.";
            return false;
        }
        errorSpan.textContent = "";
        return true;
    };

    const validarDescripcion = () => {
        const errorSpan = descripcion.nextElementSibling;
        if (descripcion.value.trim().length < 10) {
            errorSpan.textContent = "La descripción debe tener al menos 10 caracteres.";
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