import { api } from "./api.js";


export default async function eliminarProducto(id) {
  try {
    await api.borrarProducto(id);
    window.location.href = "index.html";
  } catch {
    alert("No fue posible borrar el producto");
  }
}





