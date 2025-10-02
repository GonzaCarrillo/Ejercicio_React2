import { useState } from "react";

const productos = [
  { id: 1, nombre: "Laptop", categoria: "electronica", precio: 999 },
  { id: 2, nombre: "Smartphone", categoria: "electronica", precio: 599 },
  { id: 3, nombre: "Camiseta", categoria: "ropa", precio: 25 },
  { id: 4, nombre: "Libro React", categoria: "libros", precio: 40 },
  { id: 5, nombre: "Zapatillas", categoria: "ropa", precio: 120 }
];

function ProductCatalog() {
  // estado para guardar la categoría activa
  const [categoria, setCategoria] = useState("todos");

  // Filtramos productos: operador ternario
  const productosFiltrados =
    categoria === "todos"
      ? productos
      : productos.filter((p) => p.categoria === categoria);

  return (
    <div>
      <h1>Catálogo de Productos</h1>

      {/* Botones de filtro */}
      <div>
        {["todos", "electronica", "ropa", "libros"].map((cat) => (
          <button key={cat} onClick={() => setCategoria(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Texto de categoría seleccionada */}
      {categoria !== "todos" && <h3>Mostrando categoría: {categoria}</h3>}

      {/* Contador dinámico con pluralización (ternario anidado) */}
      <p>
        {productosFiltrados.length === 0
          ? "No hay productos"
          : productosFiltrados.length === 1
          ? "1 producto encontrado"
          : `${productosFiltrados.length} productos encontrados`}
      </p>

      {/* Listado de productos */}
      <div>
        {productosFiltrados.length === 0 ? (
          <p>No hay productos en esta categoría.</p>
        ) : (
          productosFiltrados.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
              <h4>{p.nombre}</h4>
              <p>Precio: ${p.precio}</p>

              {/* Operador lógico para mostrar etiqueta premium */}
              {p.precio > 500 && <span style={{ color: "gold" }}>¡Producto premium!</span>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;
