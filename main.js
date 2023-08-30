/*------------------- CLASES ------------------- */

class ProductManager{

    constructor(){
        this.products = [];
    }

    // METODOS DE LA CLASE

    addProduct(title,description,price=0,thumbnail,code,stock=0){
        
        if(!title || !description || !price || !thumbnail || !code || !stock){
            return console.log("el producto se agrego con campos vacios, intente nuevamente completando todos los campos");
        }
        const product = {
            id: this.#generateId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
       

        this.products.push(product);
        
    }

    getProducts(){
        return this.products;
    }

    getProductById(idBuscado){
        const productoBuscado = this.products.find(i=>i.id === idBuscado)
        if(!productoBuscado){
            return console.log("el producto solicitado no existe");
        }
        return console.log(productoBuscado);
    }

    // METOODOS PRIVADOS DE LA CLASE
    #generateId(){
        return this.products.length ? this.products[this.products.length-1].id+1 :1
    }
    #codeVerification(verCod){
        const codigo = this.products.find(c=>c.code === verCod)
        
    }
}

let product = new ProductManager();
product.addProduct("coca-cola","bevida",600,"img-coca","|| || |||",100);
product.addProduct("sprite","bevida",600,"img-sprite","||| || |",100);
product.addProduct("fanta","bevida",600,"img-fanta","||| ||| |||", 100);

/* validacion de producto sin campos */
product.addProduct();
/* fin validacion de producto sin campos */

// se crea producto con codigo igual a un producto existente
product.addProduct("goliat-naranja","bevida",450,"img-goliatNaranja","||| ||| |||", 100)



/* validacion del funcionamiento de getProducts*/
console.log(product.getProducts());
/* fin del funcionamiento de getProducts*/

/* busqueda del producto por ID */
// si no existe
console.log(product.getProductById(10));
// si existe
console.log(product.getProductById(1));
console.log(product.getProductById(3));
/* fin del producto por ID */



