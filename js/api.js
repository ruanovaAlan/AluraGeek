import { v4 as uuidv4 } from 'uuid';

async function listaProductos() {
  const conexion = await fetch("https://alura-geek-api-iota.vercel.app/productos", {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    }
  });

  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function agregarProducto(nombre, precio, imagen) {
  const conexion = await fetch("https://alura-geek-api-iota.vercel.app/productos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
      id: uuidv4()
    })
  })
  if (!conexion.ok) {
    throw new Error("No fue posible agregar el producto");
  }
  const conexionConvertida = await conexion.json();

  return conexionConvertida;
}

async function borrarProducto(id) {
  const conexion = await fetch(`https://alura-geek-api-iota.vercel.app/productos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  });

  if (!conexion.ok) {
    throw new Error("No fue posible borrar el producto");
  }
}


export const api = {
  listaProductos, agregarProducto, borrarProducto
}
