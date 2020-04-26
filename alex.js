function doSomething() {
  console.log('doing something...')
}

function anotherThing() {
  console.log('clicked on the paragraph tag')
}

function mouseMoving() {
  // console.log('the mouse is moving');
  console.log(event.clientX, event.clientY);
  console.log();
  var xCoord = document.querySelector('#x-coordinate');
  var yCoord = document.querySelector('#y-coordinate');
  xCoord.innerHTML = event.clientX;
  yCoord.innerHTML = event.clientY;
}

function changeMessage() {
  console.log('changing message...')

  // select the appropriate HTML element
  var header = document.querySelector('h1')
  header.innerHTML = 'new name for the header';
  // change the innerText or innerHTML
  
}

var products = [
  {id: 1, name: "Lightsaver", price: 100},
  {id: 2, name: 'iphone', price: 399},
  {id: 3, name: "glasses", price: 20}
]


// document.addEventListener('DOMContentLoaded', function() {
$(document).ready(function() {
  var productsHTML = "";
  
  products.forEach(function(product) {
    productsHTML += "<div><h2>" + product.name + "</h2><p>" + product.price + "</p></div>"
  })
  
  console.log(productsHTML);
  
  // var productsDiv = document.querySelector('#products')
  var productsDiv = $('#products')
  // productsDiv.innerHTML = productsHTML;
  productsDiv.html(productsHTML);


  $("#description").on('click', function() {
    console.log('i am running a function')
  })

}) 
