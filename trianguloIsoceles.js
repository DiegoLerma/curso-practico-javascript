function alturaTriangulo(ladosIsometricos, ladoDistinto){
    const ladoEntreDos=ladoDistinto/2
    const c=Math.max(ladoEntreDos, ladosIsometricos)
    const b=Math.min(ladoEntreDos, ladosIsometricos)
    return ((c**2)-(b**2))**(1/2)
}

function calcularAlturaTriangulo(){
    const input1=document.getElementById("InputTriangulo1")
    const value1=Number(input1.value)
    console.log(value1)
    const input2=document.getElementById("InputTriangulo2")
    const value2=Number(input2.value)
    console.log(value2)
    const input3=document.getElementById("InputTriangulo3")
    const value3=Number(input3.value)
    console.log(value3)

    switch(true){
        
        case value1==value2 && value2==value3:
            ladosIsometricos=value1
            alert(/*Ese es un triangulo equilatero, cruck ;). Aun asi te lo digo:
            La altura del triangulo dado es de: */
            +alturaTriangulo(ladosIsometricos, value3)
            +"cm")
            break
            
        case value1==value2:
            ladosIsometricos=value1
            alturaTriangulo(ladosIsometricos, value3)
            alert("La altura del triangulo dado es de: "+alturaTriangulo(ladosIsometricos, value3)+"cm")
            break
                
        case value1==value3:
            ladosIsometricos=value1
            alturaTriangulo(ladosIsometricos, value2)
            alert("La altura del triangulo dado es de: "+alturaTriangulo(ladosIsometricos, value2)+"cm")
            break

        case value2==value3:
            ladosIsometricos=value2
            alturaTriangulo(ladosIsometricos, value1)
            alert("La altura del triangulo dado es de: "+alturaTriangulo(ladosIsometricos, value1)+"cm")

            break

        default:
            alert("Ese es un triangulo escaleno, cruck ;)")
        
    }
 
}