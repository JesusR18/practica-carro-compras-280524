var carro = [];
var spTotal = document.getElementById("Total");
var listaCarrp = document.getElementById("Carrito");
function agregarCarro1(){
var objProducto = {
    id : 1,
    nombre: "Producto Mapache Limited Edition",
    precio: 375,
};
carro.push(objProducto);
calcularTotal();
mostrareEnCarro();
}
function calcularTotal(){
    var elTotal = 0;
    for(var p of carro){
        elTotal+= p.precio;
    }
    spTotal.textContent = elTotal;
}


