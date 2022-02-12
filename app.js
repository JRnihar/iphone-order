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