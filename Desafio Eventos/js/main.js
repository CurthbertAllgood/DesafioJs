
//function presentacion(){
//let usuario=prompt("buenos dias, podrias indicarnos tu nombre: ");
//nombres.innerText="Hola "+usuario+" Bienvenido!";
//}

//presentacion();
const BBDD = [
    {
        "id": 1,
        "nombre": "Pizza",
        "img": "/assets/img/pizza.png",
        "precio": 20,
        "cantidad":1
    },
    {
        "id": 1,
        "nombre": "sushi",
        "img": "/assets/img/sushi.png",
        "precio": 20,
        "cantidad":1
    },

]


const carrito = [];

function renderizarProductos(){

    const tienda = document.getElementById('tienda');


    BBDD.forEach((p)=>{
    
        let productoHTML = `

        <div class="col-12 col-md-4 mb-5 d-flex justify-content-center">
        <div class="card text-dark" style="width: 18rem;">
            <img class="card-img-top" src="${p.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>${p.precio}€</p>
                <button class="btn btn-primary" onclick="agregarProductoAlCarrito(${p.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
        `

        tienda.innerHTML += productoHTML;

    });

}

renderizarProductos();





