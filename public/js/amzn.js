// Prank Amazon Order

var prank = {name: '', email: '', item: '', itemPrice: '', howMany: '', address: '', city: '', state: '', zip: ''};

var createAmzn = function(e){
    prank.name = document.getElementById('name').value;
    prank.email = document.getElementById('email').value;
    prank.item = $('#item option:selected')[0].label;
    prank.itemPrice = $('#item option:selected').val();
    prank.howMany = $('#itemHowMany').val();
    prank.address = document.getElementById('address').value;
    prank.city = document.getElementById('city').value;
    prank.state = document.getElementById('state').value;
    prank.zip = document.getElementById('zip').value;
    console.log('createAmzn is working');
  };

var calcAmznCost = function(e){
    var total = parseInt((prank.itemPrice * prank.howMany) * 1.085);
    console.log('calcAmznCost is working');
  };

var renderAmzn = function(e){
    $('#render').text(prank.name + '  ' + prank.email + ' Your Amazon.com order of  ' + prank.howMany + '  ' + prank.item + ' has shipped!');
    $('#render2').text('Hello ' + prank.name + 'Order #002-0025687-7655223 will be shipped to ' + prank.address + prank.city + ', ' + prank.state + ' ' + prank.zip);
    $('#render3').text('Return or replace your items in Your Orders.');
    console.log('renderAmzn ship notice is working');
  };

$('#amznprank').click(function(e){
    var x = createAmzn();
    calcAmznCost(x);
    renderAmzn();
});
