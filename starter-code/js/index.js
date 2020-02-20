var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');




function updateSubtot($product) {
  // Iteration 1.1
  //let price = document.getElementsByClassName('pu')[0].innerText
  let price = $product.querySelector('.pu span').innerText
  //let quantity = document.getElementsByClassName('qty')[0].value
  let quantity = $product.querySelector('.qty').value
  total = price * quantity
}

function calcAll() {
  // Iteration 1.2
  let subtotal = document.body.getElementsByClassName('subtot')[0]
  subtotal.innerText = updateSubtot()
}
$calc.onclick = calcAll;





/////////////////////////////////////////
/*

//tafel
let qty = $product.querySelector('input').value

//multiply and write into sub total
$product.querySelector('.subtot span').innerText

//funtion mit for loop?
function calcAll() {
  let firstProduct = 
    document.getElementsByClassName('product')
    updateSubtot(firstProduct)
}

*/