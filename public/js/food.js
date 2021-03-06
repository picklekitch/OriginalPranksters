var prankster = {name: '', email: '', pizzasOrdered: '', ptype: '', address: '', city: '', state: '', zip: '', note: '', size: '', sizeName: ''};

// var name, email, pizzasOrdered, ptype, address, city, state, zip, note, size;

var createFood = function(e){
  console.log(prankster.pizzasOrdered);
  prankster.name = document.getElementById('name').value;
  prankster.email = document.getElementById('email').value;
  prankster.pizzasOrdered = $('#pizzasOrdered').val();
  prankster.ptype = document.getElementById('pizzaType').value;
  prankster.address = document.getElementById('address').value;
  prankster.city = document.getElementById('city').value;
  prankster.state = document.getElementById('state').value;
  prankster.zip = document.getElementById('zip').value;
  prankster.note = document.getElementById('optional').value;
  prankster.size = $('#size option:selected').val();
  prankster.sizeName = $('#size option:selected')[0].label;
  console.log(prankster.size);
  console.log('taking in form data ' + prankster.name + ' ' + prankster.email);
  return {q: prankster.pizzasOrdered, s: prankster.size};
};

var calculateCost = function(e){
  var total = parseInt(((e.s * e.q)+3)*1.085);
  var tax = (total - ((e.s * e.q)+3));
  console.log(tax);
  console.log('this is calculating a number');
  console.log(total);
};

var renderFood = function(e){
  $('#foodrender').text('Hi ' + prankster.name + '! Thank you for placing your Papa John\'s pizza order via our online ordering service. Your order of ' + prankster.pizzasOrdered + ' ' + prankster.sizeName + ' ' + prankster.ptype + ' Pizzas is on its way to you now!');
  $('#foodrender2').text('Please find below the details of your order:')
  $('#foodrender3').text('Online Order Number: 338231004');
  $('#foodrender4').text('Deliver to: ' + prankster.address + ', ' + prankster.city + ', ' + prankster.state + ' ' + prankster.zip);
  $('#foodrender5').text('Estimated Delivery Time: 20-30 minutes');
  $('#foodrender6').text('Order Receipt:');
  $('#foodrender7').text(prankster.sizeName + ' ' + prankster.ptype + ' Pizza (x' + prankster.pizzasOrdered + '): ' + prankster.pizzasOrdered + '(' + prankster.size + ') = $' + (prankster.size*prankster.pizzasOrdered));
  $('#foodrender8').text('Delivery Fee: $3.00');
  $('#foodrender9').text('Tax: $' + (((prankster.size * prankster.pizzasOrdered) + 3)*.085).toFixed(2));
  $('#foodrender10').text('Grand Total: $' + (((prankster.size * prankster.pizzasOrdered) + 3)*1.085).toFixed(2));
  $('#foodrender11').text('Additional Delivery Notes: ' + prankster.note);
  console.log('writing the middle section');
};

$('#pizzaprank').on('click', function(e){
  var x = createFood();
  calculateCost(x);
  renderFood();
  $('#foodrendercontainer').toggle();
});


