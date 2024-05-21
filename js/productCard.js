import { api } from "./api.js";
import eliminarProducto from "./eliminarProducto.js";
const lista = document.querySelector("[product-list]");

export default function productCard(nombre, precio, imagen, id) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div id="${id}" class="mx-auto w-[100%] h=[15rem] md:h-[15rem] pb-4 md:pb-0 bg-[#2E86AB] bg-opacity-85 border-2 border-black rounded-t-lg rounded-md shadow-lg">
      <img src="${imagen}" class="mx-auto w-[100%] md:w-[12.5rem] bg-[#F0EDEE] border-2 border-black rounded-t-lg " />
      <div class="w-[100%] px-3 mt-6 font-body font-bold text-2xl">
        <p class="text-2xl text-white ">${nombre}</p>
        <div class="flex items-center justify-between mt-3">
          <p class="text-black ">$ ${precio}</p>
          <button class="delete-btn" data-id="${id}">
            <span class="delete-product material-symbols-outlined hover:text-red-600 ease-in-out duration-300">
              delete
            </span>
          </button>
        </div>
      </div>
    </div>`;

  card.querySelector(".delete-btn").addEventListener("click", async function () {
    await eliminarProducto(id)
  });

  return card;
}

async function listaProductos() {
  try {
    const listaAPI = await api.listaProductos();
    listaAPI.forEach(element => lista.appendChild(productCard(element.nombre, element.precio, element.imagen, element.id)));
  } catch {
    lista.innerHTML = `<h2>No se encontraron productos</h2>`
  }
}

listaProductos();