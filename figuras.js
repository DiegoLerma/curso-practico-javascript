// console.group("Cuadrado");
function perimetroCuadrado(lado){
    return lado*4
}

function areaCuadrado(lado){
    return lado**2
}

// console.log("Los lados del cuadrado miden "+ladoCuadrado+"cm")
// console.log("El perimetro del cuadrado mide "+perimetroCuadrado+"cm")
// console.log("El area del cuadrado mide "+areaCuadrado+"cm^2")
// console.groupEnd();


//Codigo del triangulo

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1+lado2+lado3
}

function areaTriangulo(lado1, lado2, lado3){
    const s=perimetroTriangulo(lado1, lado2, lado3)/2;
    return (s*(s-lado1)*(s-lado2)*(s-lado3))**(1/2)

}

const PI=Math.PI
function perimetroCirculo(radio){
    return radio*2*PI
}

function areaCirculo(radio){
    return PI*radio**2

}
// console.group("Triangulo");

// console.log(
//     "Los lados del triangulo miden: "
//     +ladoTriangulo1
//     +", "
//     +ladoTriangulo2
//     +", "
//     +ladoTriangulo3+"cm")
    
    // console.log("El perimetro del triangulo mide "+perimetroTriangulo+"cm")
    // console.log("El area del triangulo mide "+areaTriangulo+"cm^2")
    // console.groupEnd();
    
    // console.group("Circulo")
    
    // console.log("El radio del circulo mide: "+radioCirculo+"cm")
    // console.log("El perimetro del circulo mide: "+perimetroCirculo+"cm")
    // console.log("El area del circulo mide: "+areaCirculo+"cm^2")
    
    // console.groupEnd();

function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado")
    const value=input.value

    const perimetro=perimetroCuadrado(value)
    alert("El perimetro del cuadrado es de "+perimetro+"cm")
}

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado")
    const value=input.value
    
    const area=areaCuadrado(value)
    alert("El area del cuadrado es de "+area+"cm^2")
}

    