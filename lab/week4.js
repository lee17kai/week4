// Week 4 Lab

// The provided code goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

// Write a loop to iterate through the product data; each iteration of the loop
// should add each product to the document, by appending HTML to an existing element on the page
// with the class "products". You can use the existing HTML in the "products" element
// as a template, deleting it when you're finished.

// Write the recipe (algorithm) in the comments, then write the code!

window.addEventListener(`DOMContentLoaded`, async function() {
  let response = await fetch('https://kiei451.com/api/products.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.log(json)
  
  // Recipe:

  // Create a variable for the products data
  let product = json.products
  console.log(product)

  // Loop through the products data
  
  for(let i = 0; i < product.length; i++) {

    // Create a variable to store each product in memory
    let temp = product[i]

    // Create a variable for the HTML element we're going to add to
    let tempHTML = temp.querySelector.innerHTML

    // Insert HTML into the products element, using the data from each product
    temp.insertAdjacentHTML(`beforeend`, tempHTML)
  }
    
    



})
