import { api } from "./api.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(event) {
  event.preventDefault();
  const nombre = formulario.querySelector("[data-nombre]").value;
  const precio = formulario.querySelector("[data-precio]").value;
  const imagen = formulario.querySelector("[data-imagen]").value;

  try {
    await api.agregarProducto(nombre, precio, imagen);
    window.location.href = "index.html";
  } catch {
    // alert("No fue posible agregar el producto");
    window.location.href = "index.html";
    console.log("No fue posible agregar el producto")
  }
}

formulario.addEventListener("submit", evento => crearProducto(evento));