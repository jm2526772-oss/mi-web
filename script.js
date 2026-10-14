"use strict";
const formulario = document.getElementById("formularioRegistro");
const mensaje = document.getElementById("mensaje");
const anio = document.getElementById("anio");

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const edad = document.getElementById("edad");
const carrera = document.getElementById("carrera");

anio.textContent = new Date().getFullYear();

function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;

    mensaje.classList.remove(
        "text-success",
        "text-danger"
    );

    mensaje.classList.add(tipo);
}

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombreCompleto = nombre.value.trim();
    const correoElectronico = correo.value.trim();
    const numeroTelefono = telefono.value.trim();
    const edadUsuario = Number(edad.value);

    if (nombreCompleto.length < 3) {
        mostrarMensaje(
            "Ingresa tus nombres y apellidos correctamente.",
            "text-danger"
        );
        nombre.focus();
        return;
    }

    if (!correo.checkValidity() || correoElectronico === "") {
        mostrarMensaje(
            "Ingresa un correo electrónico válido.",
            "text-danger"
        );
        correo.focus();
        return;
    }
    if (!/^[0-9]{9}$/.test(numeroTelefono)) {
        mostrarMensaje(
            "El teléfono debe contener exactamente 9 dígitos.",
            "text-danger"
        );
        telefono.focus();
        return;
    }

    if (
        !Number.isInteger(edadUsuario) ||
        edadUsuario < 14 ||
        edadUsuario > 100
    ) {
        mostrarMensaje(
            "Ingresa una edad entre 14 y 100 años.",
            "text-danger"
        );
        edad.focus();
        return;
    }

    if (carrera.value === "") {
        mostrarMensaje(
            "Selecciona una carrera de interés.",
            "text-danger"
        );
        carrera.focus();
        return;
    }

    const autorizacion = document.getElementById("autorizacion");

    if (!autorizacion.checked) {
        mostrarMensaje(
            "Debes aceptar el uso de tus datos para continuar.",
            "text-danger"
        );
        autorizacion.focus();
        return;
    }

    mostrarMensaje(
        "¡Registro validado correctamente! En una versión conectada " +
        "a un servidor, tus datos se enviarían para su procesamiento.",
        "text-success"
    );

    console.log("Registro validado:", {
        nombre: nombreCompleto,
        correo: correoElectronico,
        telefono: numeroTelefono,
        edad: edadUsuario,
        carrera: carrera.value
    });

});

const enlacesMenu = document.querySelectorAll(
    "#menuPrincipal .nav-link"
);

enlacesMenu.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        const menu = document.getElementById("menuPrincipal");

        if (
            window.innerWidth < 992 &&
            menu.classList.contains("show")
        ) {
            const instancia = bootstrap.Collapse.getOrCreateInstance(menu);
            instancia.hide();
        }

    });

});
