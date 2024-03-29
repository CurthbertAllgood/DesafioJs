
const pedidototal=[];

window.addEventListener("DOMContentLoaded",()=>{
        console.log(localStorage);
        let obtenerCaipi = JSON.parse(localStorage.getItem('pedido'));
        for(caipi of obtenerCaipi){
            pedidototal.push(caipi);
            RenderizaPedido();
        }
        console.log("array generado"+pedidototal);

});

fetch("/js/stock.json")
    .then((response)=> response.json()
    .then((data)=> BBDD=data));


//Boton Comida
let opcion= document.getElementById("Opciones");
    opcion.onclick= () =>{RenderizarComida();}
//Boton Bebidas
let opcion1= document.getElementById("Opciones2");
    opcion1.onclick= () =>{RenderizarBebida();}
//Boton Postre
let opcion2= document.getElementById("Opciones3");
    opcion2.onclick= () =>{RenderizarPostre();}

//Renderiza el menu solo comida
function RenderizarComida(){
    const tienda = document.getElementById('tienda');
    //Limpia el menu
    tienda.innerHTML = '';
    let value=BBDD.filter(function(tipo){
        return (tipo.codigo==='C');
    });
    tienda.innerHTML='<h1>Menu de Comida</h1>';
        value.forEach((p)=>{
    //renderiza el menu de comida
            let productoHTML = `
            <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
            <img class="imagen" src="${p.img}" alt="Imagen Comida">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">${p.descripcion}</p>
                    <p>${p.precio}$</p>
                    <button id="btn-click" class="btn btn-primary" onclick="SumarPedido(${p.id})">Añadir al pedido</button>
                </div>
            </div>
            </div>

            `
            
            tienda.innerHTML += productoHTML;
        });

}

//Renderiza el menu solo bebidas
function RenderizarBebida(){

    
    const tienda = document.getElementById('tienda');
    
    tienda.innerHTML = '';

    let value=BBDD.filter(function(tipo){
        return (tipo.codigo==='B');
    });
    tienda.innerHTML='<h1>Menu de Bebidas</h1>';
        value.forEach((p)=>{
            let productoHTML = `
                <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
                <div class="card text-dark" style="width: 18rem;">
                <img class="imagen" src="${p.img}" alt="Imagen Bebida">
                    <div class="card-body">
                        <h5 class="card-title">${p.nombre}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>${p.precio}$</p>
                        <button id="btn-click" class="btn btn-primary"  onclick="SumarPedido(${p.id})">Añadir al pedido</button>
                    </div>
                </div>
                </div>
                `
            tienda.innerHTML += productoHTML;
        });
}

//Renderiza el menu solo postre
function RenderizarPostre(){


    const tienda = document.getElementById('tienda');
    
    tienda.innerHTML = '';

    let value=BBDD.filter(function(tipo){
        return (tipo.codigo==='P');
    });
    tienda.innerHTML='<h1>Menu de Postres</h1>';
        value.forEach((p)=>{
            let productoHTML = `
            <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
            <div class="card text-dark" style="width: 18rem;">
            <img class="imagen" src="${p.img}" alt="Imagen postre">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>${p.precio}$</p>
                    <button id="btn-click" class="btn btn-primary" onclick="SumarPedido(${p.id})">Añadir al pedido</button>
                </div>
            </div>
            </div>
            `
            
            tienda.innerHTML += productoHTML;
        });

}
//Suma productos al pedido de la mesa

function RenderizaPedido(){
    let pedido = document.querySelector('#pedido');    
        let pedidoHtml =' ';
            pedidototal.forEach((p, id)=>{  
            pedidoHtml += `
            <table class="tabla">
            <th scope="col">ID: ${p.id}</th>
            <th scope="col">Nombre: ${p.nombre}</th>
            <th scope="col">Cantidad: ${p.cantidad}</th>
            <th scope="col">Precio:$${p.precio}</th>
            <th scope="col">
                <button class="btn btn-danger" onclick="RestarPedido(${id})">Eliminar</button>
            </th>
            ` 
    })
    pedido.innerHTML = pedidoHtml;
    BorrarStorage();
    localStorage.setItem('pedido', JSON.stringify(pedidototal));
}

//Suma y resta del pedido

function SumarPedido(id){

    let pedidos = BBDD.find(pedidos => pedidos.id === id);
    let ListaPedidos = pedidototal.find(pedidos => pedidos.id === id);
        if(ListaPedidos){
            ListaPedidos.cantidad++;
        }
        else {
        pedidos.cantidad = 1;
        pedidototal.push(pedidos);
        console.log(pedidototal);
        }
    RenderizaPedido();

}


//etiquetas de agregado y quitado

const agregar= document.getElementById('tienda')
agregar.addEventListener('click',()=>{
    Toastify({
        text: 'agregaste un pedido',
        duration: 1000,
    }).showToast();
})


const quitar= document.getElementById('pedido')
    quitar.addEventListener('click',()=>{
        Toastify({
            text: 'quitaste un pedido',
            duration: 1000,
        }).showToast();
    })

//mensaje de finalizado de compra

const finalizar=document.getElementById('finalizarPedido')
    finalizar.addEventListener('click',()=>{
        let acu=0;
        pedidototal.forEach((p)=>{
        acu += p.precio * p.cantidad;
        });
        Swal.fire({
            title: 'El precio final es: $'+acu+'\n¿Esta de acuerdo?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            denyButtonText: `Modificar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
            Swal.fire('¡Pagado!', '', 'success')
            } else if (result.isDenied) {
            Swal.fire('Verificar el pedido y cambiarlo de ser necesario', '', 'info')
            }
        })
    })


//borra el storage 

function BorrarStorage(){
    localStorage.clear();
}

//Elimina elemento del pedido y actualiza el storage

function RestarPedido(id){
    BorrarStorage();
    pedidototal[id].cantidad--;
        if(pedidototal[id].cantidad===0){
        pedidototal.splice(id,1);
    }
    RenderizaPedido();

}
//Calcula precio final

function CalcularPrecioFinal(){
    
    let acu=0;
    pedidototal.forEach((p)=>{
        acu += p.precio * p.cantidad;
    });
    const t = document.getElementById('total');
    t.innerHTML = `<h5>El total del pedido es: $${acu}</h5>`;
}




