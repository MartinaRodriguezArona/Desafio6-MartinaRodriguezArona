const producto = {
    //propiedades
    Nombre:"Camiseta",
    Precio: 2000,
    CantidadDisponibles: 20,
}

producto.Nombre = "Zapatillas";
producto.categoria = "calzado";
delete producto.CantidadDisponibles

console.log(producto)