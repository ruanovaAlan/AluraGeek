import { api } from "./api.js";
const lista = document.querySelector("[product-list]");

export default function productCard(nombre, precio, imagen, id) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="mx-auto w-[100%] h=[15rem] md:h-[14rem] p-3 bg-[#2E86AB] bg-opacity-85 border-2 border-black rounded-md shadow-lg">
      <img src="${imagen}" class="mx-auto w-[15rem] md:w-[11rem] bg-[#F0EDEE] border-2 border-black rounded-sm shadow-lg" />
      <div class="w-[100%] px-2 mt-6 font-body font-bold text-xl">
        <p class="text-white opacity-80">${nombre}</p>
        <div class="flex items-center justify-between mt-3">
          <p class="text-white ">$ ${precio}</p>
          <button>
            <span class="delete-product material-symbols-outlined">
              delete
            </span>
          </button>
        </div>
      </div>
    </div>`;

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