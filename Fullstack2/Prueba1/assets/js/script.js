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

        // Aplica estilo flex para centrar
        containerForm.style.display = 'flex';
        containerForm.style.justifyContent = 'center';
        containerForm.style.alignItems = 'center';
        containerForm.style.flexDirection = 'column';
        containerForm.style.marginTop = '5vh';
    });
});