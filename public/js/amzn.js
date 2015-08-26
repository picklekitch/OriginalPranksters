// var pform = require('./prankforms.js');

var createAmzn = function(e){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var item = $('#item option:selected').val();
    console.log(item);
    var howMany = $('#itemHowMany').val();
    console.log(howMany);
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;
    console.log('taking in form data ' + name + ' ' + email);
    return {i: item, q: howMany};
  };

var calcAmznCost = function(e){
    var total = parseInt((e.i * e.q) * 1.085);
    console.log('calculating a number');
    console.log(total);
  };

var renderAmzn = function(e){
    $('#middle').text(createAmzn.name + ' ' + createAmzn.email + 'Your Amazon.com order of  ' + createAmzn.howMany + createAmzn.item + ' has shipped!');
    $('#middle2').text('Hello ' + createAmzn.name + 'Order #002-0025687-7655223 will be shipped to ' + createAmzn.address + createAmzn.city + ', ' + createAmzn.state + ' ' + createAmzn.zip);
    $('#middle3').text('Return or replace your items in Your Orders.');
    console.log('sending Amazon ship notice');
  };

$('amznprank').on('click', function(e){
    var x = createAmzn();
    calcAmznCost(x);
    renderAmzn();
});

