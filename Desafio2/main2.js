function Bienvenido(){
    let nombre= prompt(Ingrese el usuario );
    return nombre;
}

let VerCatalogo = (nombre) = { return confirm(nombre+ Deseas validar nuestro catalogo );
}

function ValidaEdad(){
    let edad=confirm(Usted es mayor de edad);
    return edad;
}

function Menu(){
    return Number(prompt(1.- Bebidas alcoholicasn2.- Bebidas sin alcoholn 3.- Comidan 4.- Postren 5.- Finalizar seleccion));
}

function BebidasAlcoholicas(){
    return Number(prompt(1.- Cervezan2.- Vinon 3.- Whisky));

}
function BebidasSinAlcohol(){
    return Number(prompt(1.- Aguan2.- Gaseosan3.- Bebida energetica));

}

function Comida(){
    return Number(prompt(1.- Asadon2.- Asiatican 3.- Mexicana));

}

function Postre(){
    return Number(prompt(1.- Tiramisun2.- Cafen 3.- Helado));

}


nombre=Bienvenido();
if(VerCatalogo(nombre)){
    do{
            switch(valida=Menu()){
                case 1{
                    if(ValidaEdad()){
                        bebidaCA=BebidasAlcoholicas();
                        break;
                    }
                }
                case 2{
                    bebidaSA=BebidasSinAlcohol();
                    break;
                }
                case 3{
                    comida=Comida();
                    break;
                }
                case 4{
                    postre=Postre();
                    break;
                }
                case 5{
                    alert(Ha finalizado su eleccionnGracias!);
                    break;
                }
                default{
                    alert(La opcion ingresada es incorrecta);
                    break;
                }
        }


    }while(valida!=5);

}
else{
    alert(Adios, Vuelva pronto!);
}




