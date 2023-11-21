//Esta funcion es para el formulario de búsqueda//

function buscar() {
    
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var elementosDeTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

    elementosDeTexto.forEach(function(elemento) {
    var contenido = elemento.textContent.toLowerCase();

    if (contenido.includes(searchTerm)) {
    elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
    var contenidoResaltado = contenido.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlighted">${match}</span>`);elemento.innerHTML = contenidoResaltado;
        }
    });
}

//Esto es para la media query// 

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggle = document.getElementById("navbar-toggle");
    var navbarMenu = document.querySelector(".navbar-collapse"); 

    navbarToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 767) {
            navbarMenu.classList.remove("show");
        }
    });
});

//Acá quise crear un cuadro de confirmación previo a la página, 
// bloqueando incluso la interacción de la misma antes d la confirm del usuario
document.addEventListener("DOMContentLoaded", function () {

    document.body.style.overflow = 'hidden';

    var overlay = document.createElement('div');
    overlay.id = 'confirm-overlay';
    document.body.appendChild(overlay);

    document.getElementById("confirm-box").style.display = "block";

    document.getElementById("confirm-button").addEventListener("click", function () {
        var response = document.querySelector('input[name="response"]:checked').value;

        if (response === "yes") {
            alert("¡Bienvenidos a mi galería de arte con IA!");
        } else if (response === "no") {
            alert("¡Una lástima!");
            window.location.href = "https://www.otrapagina.com"; 
        }

        document.body.style.overflow = 'auto';

        document.body.removeChild(overlay);
        document.getElementById("confirm-box").style.display = "none";
    });
});


//Esto vendría siendo como una validación básica, no me dio tiempo para hacer que el usuario pueda enviar info a mi correo//

document.querySelector('#contact form').addEventListener('submit', function (e) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        e.preventDefault();
        alert('Por favor, completa todos los campos del formulario.');
    }
});
