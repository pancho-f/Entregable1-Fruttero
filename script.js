// se declara el array para la orden y los arrays para los productos disponibles
let orden1 = []
const productosComida = ["Pizza", "Hamburguesa", "Barra de Chocolate"]
const productosIndumentaria = ["Gorra", "Lentes de sol", "Camisa"]
const productosElectro = ["Microondas", "Televisor", "Dron"]

// funciones para cada categoria
const compraComida = () => {
    let productoElegido = parseInt(prompt("Elegí el producto a agregar: \n 1. Pizza \n 2. Hamburguesa \n 3. Barra de Chocolate"))
    productoElegido -=1
    if(productoElegido<=(productosComida.length -1) && productoElegido>-1){
        orden1.push(productosComida[productoElegido])
    }else {alert("Ingresaste un valor inválido, intenta nuevamente.")}
}
const compraIndumentaria = () => {
    let productoElegido = parseInt(prompt("Elegí el producto a agregar: \n 1. Gorra \n 2. Lentes de sol \n 3. Camisa"))
    productoElegido -=1
    if(productoElegido<=(productosIndumentaria.length -1) && productoElegido>-1){
        orden1.push(productosIndumentaria[productoElegido])
    }else {alert("Ingresaste un valor inválido, intenta nuevamente.")}
}
const compraElectro = () => {
    let productoElegido = parseInt(prompt("Elegí el producto a agregar: \n 1. Microondas \n 2. Televisor \n 3. Dron"))
    productoElegido -=1
    if(productoElegido<=(productosElectro.length -1) && productoElegido>-1){
        orden1.push(productosElectro[productoElegido])
    }else {alert("Ingresaste un valor inválido, intenta nuevamente.")}
}

//funcion para eliminar productos, uno a la vez
const editarCompra = () => {
    let productoElegido = prompt("Elegí el producto a eliminar: \n"+orden1.join("\n"))
    if (orden1.includes(productoElegido)){
        productoElegido = orden1.indexOf(productoElegido)
        orden1.splice(productoElegido, 1)
    }else {alert("Ingresaste un valor inválido, intenta nuevamente.")}
}


// interfaz de compra
const interfazCompra = () => {
    let categoriaElegida = prompt("Elegí la categoría: \n 1. Comida \n 2. Indumentaria \n 3. Electrodomésticos \n 5. Editar orden \n 6. Cancelar")
    while (categoriaElegida !== true){
        while (categoriaElegida !== "6"){
            switch(categoriaElegida){
                case categoriaElegida="1": compraComida()
                    break;
                case categoriaElegida="2": compraIndumentaria()
                    break;
                case categoriaElegida="3": compraElectro()
                    break;
                case categoriaElegida="5": editarCompra()
                    break;
                case categoriaElegida=false:
                    break;
                default: alert("Opcion inválida, intenta nuevamente.")
            }
            categoriaElegida = prompt("Elegí la categoría: \n 1. Comida \n 2. Indumentaria \n 3. Electrodomésticos \n 5. Editar orden \n 6. Terminar")
        } categoriaElegida = confirm("Estás seguro?")
    }
}

//llama a la funcion
interfazCompra()

// envia el mensaje final sobre la orden.   posiblemente se deberia incorporar a la funcion interfazCompra ? y tambien podria ser en forma de alerta en lugar de console.log
if(orden1.length!==0){
    console.log("La orden de compra de los siguientes productos: \n-"+orden1.join(".\n-")+".\nSe ha enviado.")
}else{
    console.log("La compra se ha cancelado.")
}