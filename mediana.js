const lista1=[
    100,200,500, 400000,1

]


function esPar(number){
    if(number%2==0){
        return true  
    }
    else{
        return false
    }
}

function obtenerMediana(lista){
    var listaOrdenada=lista.sort(function(a, b){return a-b});
    // console.log(listaOrdenada)
    var mitadLista=lista.length/2
    // console.log(mitadLista)
    // console.log(Math.round(mitadLista))

    if (esPar(lista.length)){
        return ((lista[mitadLista]+lista[mitadLista-1])/2)
        
        // return ("Mediana: "+mediana)
        
    }
    else{
        // console.log(Math.round(mitadLista))
        return listaOrdenada[Math.round(mitadLista-1)]

    }

}
// console.log(esPar(lista1.length))
console.log(obtenerMediana(lista1))

