function upDateCase(product, price, isIncreasing) {
    let productInput = document.getElementById(product);
    let productnumber = productInput.value;
    if (isIncreasing == true) {
        productnumber = parseFloat(productnumber) + 1;
    } else if (productnumber > 0) {
        productnumber = parseFloat(productnumber) - 1;
    }
    productInput.value = productnumber;
    let productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productnumber * price;
    calculate()
}

function getInput(product) {
    let productInput = document.getElementById(product);
    let productnumber = productInput.value;
    return productnumber;
}

function calculate() {
    const phonTotal = getInput("input-number") * 1219;
    const casetotal = getInput("case-number") * 59
    const subTotal = phonTotal + casetotal;


    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("taxt-amount").innerText = tax;
    document.getElementById("total-amount").innerText = totalPrice;
}







document.getElementById('phone-plus').addEventListener("click", function() {

    upDateCase("input-number", 1219, true);

})
document.getElementById('phone-minus').addEventListener("click", function() {

    upDateCase("input-number", 1219, false);
})




document.getElementById('case-plus').addEventListener("click", function() {

    upDateCase("case-number", 59, true);

})
document.getElementById('case-minus').addEventListener("click", function() {

    upDateCase("case-number", 59, false);
})