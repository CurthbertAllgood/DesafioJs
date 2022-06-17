function Bienvenido(){
    let nombre= prompt("Ingrese el usuario");
    return nombre;
}

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
                        bebidaCA=BebidasAlcoholicas();
                        break;
                    }
                }
                case 2:{
                    bebidaSA=BebidasSinAlcohol();
                    break;
                }
                case 3:{
                    comida=Comida();
                    break;
                }
                case 4:{
                    postre=Postre();
                    break;
                }
                case 5:{
                    alert("Ha finalizado su eleccionnGracias!");
                    break;
                }
                default:{
                    alert("La opcion ingresada es incorrecta");
                    break;
                }
        }


    }while(valida!=5);

}
else{
    alert(" Adios, Vuelva pronto!");
}




