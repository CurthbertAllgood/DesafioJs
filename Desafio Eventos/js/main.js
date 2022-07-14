

const pedidototal=[];

//Boton Comida
let opcion= document.getElementById("Opciones");


opcion.onclick= () =>{renderizarComida();
}
//Boton Bebidas
let opcion1= document.getElementById("Opciones2");


opcion1.onclick= () =>{renderizarBebida();
}
//Boton Postre
let opcion2= document.getElementById("Opciones3");


opcion2.onclick= () =>{renderizarPostre();
}





//Renderiza el menu solo comida
function renderizarComida(){

    const tienda = document.getElementById('tienda');
    
    tienda.innerHTML = '';
    let value=BBDD.filter(function(tipo){
        return (tipo.codigo==='C');
    });

        value.forEach((p)=>{
            
            let productoHTML = `
    
            <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Imagen Comida">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>${p.precio}$</p>
                    <button class="btn btn-primary" onclick="SumarProducto(${p.id})">Añadir al pedido</button>
                </div>
            </div>
            </div>
            `
            
            tienda.innerHTML += productoHTML;
        });
}

//Renderiza el menu solo bebidas
function renderizarBebida(){

    
    const tienda = document.getElementById('tienda');
    
    tienda.innerHTML = '';

    let value=BBDD.filter(function(tipo){
        return (tipo.codigo==='B');
    });


        value.forEach((p)=>{
            
            let productoHTML = `
    
            <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Imagen Bebida">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>${p.precio}$</p>
                    <button class="btn btn-primary" onclick="SumarProducto(${p.id})">Añadir al pedido</button>
                </div>
            </div>
            </div>
            `
            
            tienda.innerHTML += productoHTML;
        });
}

//Renderiza el menu solo postre
function renderizarPostre(){


    const tienda = document.getElementById('tienda');
    
    tienda.innerHTML = '';

    let value=BBDD.filter(function(tipo){
        return (tipo.codigo==='P');
    });

        value.forEach((p)=>{
            
            let productoHTML = `
    
            <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Imagen postre">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>${p.precio}$</p>
                    <button class="btn btn-primary" onclick="SumarProducto(${p.id})">Añadir al pedido</button>
                </div>
            </div>
            </div>
            `
            
            tienda.innerHTML += productoHTML;
        });
}

function SumarProducto(id){

    let pedidos = BBDD.find(pedidos => pedidos.id === id);
    let ListaPedidos = pedidototal.find(pedidos => pedidos.id === id);
        if(ListaPedidos){
            ListaPedidos.cantidad++;
            alert("¡producto "+pedidos.nombre+" agregado!");
        }
        else {
        pedidos.cantidad = 1;
        pedidototal.push(pedidos);
        alert("¡producto "+pedidos.nombre+" agregado!");
        console.log(pedidototal);
        }
    CalcularPrecioFinal();

}

function CalcularPrecioFinal(){
    let acu=0;
    pedidototal.forEach((p)=>{
        acu += p.precio * p.cantidad;
    });
    console.log("Precio final $"+acu);
}
