var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

//we define this function and want this to work on a single product row in our table
function updateSubtot($product) {
  // Iteration 1.1

  let price = $product.querySelector(".pu span").innerText;
  //assign to variable
  let quantity = $product.querySelector("input").value;
  //multiply and write in sub-total
  $product.querySelector(".subtot span").innerText =
    Number(price) * Number(quantity);
}

function calcAllHandler(event) {
  event.currentTarget; //<-- that gives u the button which was clicked

  // Iteration 1.2
  let allProductElements = document.getElementsByClassName("product");

  //loops over all products to get the total for each product
  for (let i = 0; i < allProductElements.length; i++) {
    // document.querySelector('h2 span').innerText = Number(result)
    updateSubtot(allProductElements[i]);
  }

  // Iteration 3
  //loops over all product totals to get the total amount of all products
  let result = 0;
  let subtot = document.querySelectorAll(".itemPrice");

  for (let i = 0; i < subtot.length; i++) {
    result += parseInt(subtot[i].innerText);
  }
  document.getElementById("pricetotal").innerHTML = result;

}

$calc.onclick = calcAllHandler;



// Iteration 4: Deleting a product

//Select all the "Delete" buttons
let deleteButton = document.getElementsByClassName("btn btn-delete")
let product = document.getElementsByClassName("product")
let bodyParent = document.querySelector("tbody").parentNode

function deleteProduct(event) {
  if (event.currentTarget) {
    product.removeChild()
    
  }
}

deleteButton.onclick = deleteProduct(bodyParent.currentTarget);


/*For each button, assign a click event that will: 
- select the wrapper tr that contains all the HTML for the product that should be deleted, 
- select the tbody parent that contains all of the product wrapper trs, 
- use the method removeChild we already saw in the lesson

You can use e.currentTarget to access the "Delete" button that was just clicked 
and select the parent node of an HTML element with parentNode.
.cloneNode(true)
*/