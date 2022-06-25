
function Cliente(nombre,pedido){
    this.nombre=nombre;
    this.pedido=[];
}


const cliente1= new Cliente();

function Bienvenido(){ 
    return cliente1.nombre=prompt("Ingrese el usuario");
}

console.log(cliente1);

let VerCatalogo= (nombre) => {return confirm(nombre+ " Deseas validar nuestro catalogo?" );
}

function ValidaEdad(){
    let edad=confirm("Usted es mayor de edad");
    return edad;
}

function Menu(){
    return Number(prompt("1.- Bebidas alcoholicas\n2.- Bebidas sin alcohol\n 3.- Comida\n 4.- Postre\n 5.- Finalizar seleccion"));
}

function BebidasAlcoholicas(){
    return Number(prompt("1.- Cerveza\n2.- Vino\n 3.- Whisky"));

}
function BebidasSinAlcohol(){
    return Number(prompt("1.- Agua\n2.- Gaseosa\n3.- Bebida energetica"));

}

function Comida(){
    return Number(prompt("1.- Asado\n2.- Asiatica\n 3.- Mexicana"));

}

function Postre(){
    return Number(prompt("1.- Tiramisu\n2.- Cafe\n 3.- Helado"));

}


nombre=Bienvenido();
if(VerCatalogo(nombre)){
    do{
            switch(valida=Menu()){
                case 1:{
                    if(ValidaEdad()){
                        cliente1.pedido.push(BebidasAlcoholicas());
                        break;
                    }
                }
                case 2:{
                    cliente1.pedido.push(BebidasSinAlcohol());
                    break;
                }
                case 3:{
                    cliente1.pedido.push(Comida());
                    break;
                }
                case 4:{
                    cliente1.pedido.push(Postre());
                    break;
                }
                case 5:{
                    alert("Ha finalizado su eleccion\nGracias!");
                    break;
                }
                default:{
                    alert("La opcion ingresada es incorrecta");
                    break;
                }
        }
    }while(valida!=5);

    //Muestra en la consola las opciones tomadas por el cliente
    cliente1.pedido.forEach(function(x){
    console.log(x);
    });
}
else{
    alert(" Adios, Vuelva pronto!");
}




