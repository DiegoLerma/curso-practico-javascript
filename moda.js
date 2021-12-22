var lista1=[
    1,2,3,1,2,3,4,2,2,2,1,
]

function contarValores(lista){
    const listaCount={};
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento]++
            }
            else{
            listaCount[elemento]=1;
        }}
    )
    return listaCount

}


function calcularModa(lista){
    const listaDeValores=contarValores(lista)
    const listaArray=Object.entries(listaDeValores).sort(
        function(elementoA, elementoB){
        return elementoA[1]-elementoB[1]})

    const moda=listaArray[listaArray.length-1]
    return moda[0]
}
console.log("La moda de la lista ingresada "+lista1+" es: " +calcularModa(lista1))

    