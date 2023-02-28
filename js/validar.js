function validar() {
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('correo');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    const error_n = document.getElementById('error-nombre');
    const error_c = document.getElementById('error-correo');
    const error_a = document.getElementById('error-asunto');
    const error_m = document.getElementById('error-mensaje');

    var errors = 0;
    var validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (nombre.value == '') {
        errors = errors + 1;
        error_n.classList.add('error');
        error_n.innerHTML = '<p>Ingrese su nombre</p>'
    }
    else {
        errors = errors - 1;
        error_n.classList.remove('error');
        error_n.classList.add('hidden');
    }

    if (!validEmail.test(correo.value)) {
        errors = errors + 1;
        error_c.classList.add('error');
        error_c.innerHTML = '<p>Ingrese un correo valido</p>'
    }
    else {
        errors = errors - 1;
        error_c.classList.remove('error');
        error_c.classList.add('hidden');
    }

    if (asunto.value == '') {
        errors = errors + 1;
        error_a.classList.add('error');
        error_a.innerHTML = '<p>Ingrese asunto</p>'
    }
    else {
        errors = errors - 1;
        error_a.classList.remove('error');
        error_a.classList.add('hidden');
    }

    if (mensaje.value == '') {
        errors = errors + 1;
        error_m.classList.add('error');
        error_m.innerHTML = '<p>Ingrese mensaje</p>'
    }
    else {
        errors = errors - 1;
        error_m.classList.remove('error');
        error_m.classList.add('hidden');
    }

    if (errors <= 0) {
        const btn = document.getElementById('btn-contacto');

        document.getElementById('form')
            .addEventListener('submit', function (event) {
                event.preventDefault();

                btn.value = 'Enviando...';

                const serviceID = 'default_service';
                const templateID = 'template_iy9ybiq';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btn.value = 'Enviar';
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'Mensaje enviado'
                          })
                    }, (err) => {
                        btn.value = 'Enviar';
                        alert(JSON.stringify(err));
                    });
            });
    }
}