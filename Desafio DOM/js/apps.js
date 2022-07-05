let usuario=prompt("buenos dias, podrias indicarnos tu nombre: ");

nombre.innerText="Hola "+usuario+" Bienvenido!";




const mostrarProductos = () =>{
        const contenedor=document.getElementById("Productos");
        ProductosEnStock.forEach(productos => {
                const div = document.createElement("div");
                div.classList.add("card");
                div.innerHTML=`<div class="card mb-3" style="max-width: 540px;">
                                        <div class="row g-0">
                                                <div class="col-md-4">
                                                        <img src=${productos.img} class="img-fluid rounded-start">
                                                </div>
                                                        <div class="col-md-8">
                                                                <div class="card-body">
                                                                <h5 class="card-title">${productos.nombre}</h5>
                                                        <p class="card-text">${productos.descripcion}</p>
                                                        <h4 class="card-title">${productos.precio}</h4>
                                                                </div>
                                                </div>
                                        </div>
                                </div>
                `
        contenedor.appendChild(div);
        })



}

mostrarProductos();