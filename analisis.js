//Helpers or Utils
function esPar(numerito){
    return (numerito%2==0)
}

function calcularMediaAritmetica(lista){
    // let sumaLista=0;
    // for (let i=0; i<lista.length; i++){
    //     sumaLista=sumaLista+lista[i];
    // }

    const sumaLista=lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado+nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista

}

//Calculadora de mediana

//Obteniendo lista de salarios
const salariosColombia=colombia.map(
    function(personita){
        return personita.salary;
    }
)

//Obteniendo salarios ordenados
const salariosColombiaSorted=salariosColombia.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
)

//Obteniendo mediana de salarios
function medianaSalariosCol(lista){
    const mitad=parseInt(lista.length/2)

    if(esPar(lista.length)){
        const personitaMitad1=lista[mitad-1]
        const personitaMitad2=lista[mitad]

        const mediana=calcularMediaAritmetica([personitaMitad1, personitaMitad2])
        return mediana

    } 
    else{
        const personitaMitad=lista[mitad]
        return personitaMitad
    }
}



//Mediana del top 10%
const spliceStart=(salariosColombiaSorted.length*(90)/100)
const spliceCount=salariosColombiaSorted.length-spliceStart

const SalariosTop10Col=salariosColombiaSorted.splice(
    spliceStart, 
    spliceCount,
    )
    
const medianaGeneralCol=medianaSalariosCol(salariosColombiaSorted)
const medianaTop10Col=medianaSalariosCol(SalariosTop10Col)

console.log({medianaGeneralCol, medianaTop10Col,})