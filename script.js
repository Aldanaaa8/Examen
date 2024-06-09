document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        alert(`Gracias, ${nombre}. Hemos recibido tu mensaje: "${mensaje}". Nos pondremos en contacto contigo a través del email: ${email}.`);
    });
});