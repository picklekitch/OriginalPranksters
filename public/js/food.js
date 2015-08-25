// var pform = require('./prankforms.js');


var createFood = function(e){
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var pizzasOrdered = $('#pizzasOrdered').val();
  console.log(pizzasOrdered);
  var ptype = document.getElementById('pizzaType').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var note = document.getElementById('optional').value;
  var size = $('#size option:selected').val();
  console.log(size);
  console.log('taking in form data ' + name + ' ' + email);
  return {q: pizzasOrdered, s: size};
};

var calculateCost = function(e){
  var total = parseInt(((e.s * e.q)+3)*1.085);
  console.log('this is calculating a number');
  console.log(total);
};

var renderFood = function(e){
  $('#middle').text(createFood.name + ' ' + createFood.email + 'Thank you for placing your Papa John\'s pizza order via our online ordering service. Your order of ' + createFood.pizzasOrdered + ' ' + createFood.size + ' ' + createFood.ptype + ' Pizzas is on it\'s way to you now!');
  $('#middle2').text('Hello ' + createFood.name + 'Order Number: 338231004 will be delivered to ' + createFood.address + createFood.city + ', ' + createFood.state + ' ' + createFood.zip);
  $('#middle3').text('Return or replace your items in Your Orders.');
  console.log('writing the middle section');
};

$('#pizzaprank').on('click', function(e){
  var x = createFood();
  calculateCost(x);
  renderFood();
});


