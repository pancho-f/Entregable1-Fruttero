// se declara el array para la orden y los arrays para los productos
let orden1 = []
const productosComida = ["Pizza", "Hamburguesa", "Barra de Chocolate"]
const productosIndumentaria = ["Gorra", "Lentes de sol", "Camisa"]
const productosElectro = ["Microondas", "Televisor", "Dron"]

// funciones para cada categoria
const compraComida = () => {
    let productoElegido = parseInt(prompt("Elegí el producto a agregar: \n 1. Pizza \n 2. Hamburguesa \n 3. Barra de Chocolate"))
    productoElegido -=1
    orden1.push(productosComida[productoElegido])
}
const compraIndumentaria = () => {
    let productoElegido = parseInt(prompt("Elegí el producto a agregar: \n 1. Gorra \n 2. Lentes de sol \n 3. Camisa"))
    productoElegido -=1
    orden1.push(productosIndumentaria[productoElegido])
}
const compraElectro = () => {
    let productoElegido = parseInt(prompt("Elegí el producto a agregar: \n 1. Microondas \n 2. Televisor \n 3. Dron"))
    productoElegido -=1
    orden1.push(productosElectro[productoElegido])
}


// interfaz de compra
let categoriaElegida = prompt("Elegí la categoría: \n 1. Comida \n 2. Indumentaria \n 3. Electrodomésticos \n 4. Muebles \n 5. Varios \n 6.Cancelar")
while (categoriaElegida !== "6"){
    switch(categoriaElegida){
        case categoriaElegida="1": compraComida()
            break;
        case categoriaElegida="2": compraIndumentaria()
            break;
        case categoriaElegida="3": compraElectro()
            break;
        default: console.log("opcion invalida")
    }
    categoriaElegida = prompt("Elegí la categoría: \n 1. Comida \n 2. Indumentaria \n 3. Electrodomésticos \n 6.Terminar")
}

// envia el mensaje final sobre la orden
if(orden1.length!==0){
    console.log("la orden de compra de "+orden1+" se ha enviado")
}else{
    console.log("la compra se ha cancelado")
}

console.log("test")             //no hace nada



//funcion flecha ejemplo
const funcionNombre = parametro => parametro*10
console.log(funcionNombre(10))






















