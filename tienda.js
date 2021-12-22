// const precioOriginal=120;
// const descuento=18

function calculadoraPrecioConDescuento(precio, descuento){
    return (100-descuento)*precio/100
}

// console.log("El precio con descuento es: $"+calculadoraPrecioConDescuento(precioOriginal, descuento))


function onClickButtonPriceDiscount(){
    const inputPrice=document.getElementById("InputPrice");
    const priceValue=inputPrice.value;

    const inputDiscount=document.getElementById("InputDiscount");
    const discountValue=inputDiscount.value;

    const precioConDescuento=calculadoraPrecioConDescuento(priceValue, discountValue);
    const resultP=document.getElementById("ResultP");
    resultP.innerText="El precio con descuento es de $"+precioConDescuento
}