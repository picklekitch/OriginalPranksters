// Prank Amazon Order

var prankster = {name: '', email: '', item: '', itemPrice: '', howMany: '', address: '', city: '', state: '', zip: ''};
// var name, email, item, itemNum, howMany, address, city, state, zip;

var createAmzn = function(e){
    prankster.name = document.getElementById('name').value;
    prankster.email = document.getElementById('email').value;
    prankster.item = $('#item option:selected')[0].label;
    console.log('this is the console dir')
    console.dir(prankster.item);
    prankster.itemPrice = $('#item option:selected').val();
    console.log(prankster.item);
    prankster.howMany = $('#itemHowMany').val();
    console.log(prankster.howMany);
    prankster.address = document.getElementById('address').value;
    prankster.city = document.getElementById('city').value;
    prankster.state = document.getElementById('state').value;
    prankster.zip = document.getElementById('zip').value;
    console.log('taking in form data ' + prankster.name + ' ' + prankster.email);
  };

var calcAmznCost = function(e){
    var total = parseInt((prankster.itemPrice * prankster.howMany) * 1.085);
    console.log('calculating a number');
    console.log(total);
  };

var renderAmzn = function(e){
    $('#middle').text(prankster.name + '  ' + prankster.email + ' Your Amazon.com order of  ' + prankster.howMany + '  ' + prankster.item + ' has shipped!');
    $('#middle2').text('Hello ' + prankster.name + 'Order #002-0025687-7655223 will be shipped to ' + prankster.address + prankster.city + ', ' + prankster.state + ' ' + prankster.zip);
    $('#middle3').text('Return or replace your items in Your Orders.');
    console.log('sending Amazon ship notice');
  };

$('#amznprank').click(function(e){
    console.log('clicked');
    var x = createAmzn();
    calcAmznCost(x);
    renderAmzn();
});
