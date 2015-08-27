// Prank Amazon Order

var prank = {name: '', email: '', item: '', itemPrice: '', howMany: '', address: '', city: '', state: '', zip: '', date: '', total: '', tax: ''};

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
    prank.date = document.getElementById('date').value;
    console.log('createAmzn is working');
  };

var calcAmznCost = function(e){
    prank.total = parseInt((prank.itemPrice * prank.howMany) * 1.085).toFixed(2);
    prank.tax = (prank.total - parseInt(prank.itemPrice * prank.howMany)).toFixed(2);
    console.log('calcAmznCost is working');
  };

var renderAmzn = function(e){
    $('#render').text(prank.name + '  ' + prank.email);
    $('#render1').text(' Your Amazon.com order of  ' + prank.howMany + '  ' + prank.item + ' has shipped!');
    $('#render2').text(' Amazon.com <ship-confirm@amazon.com>');
    $('#render3').text(' Reply-To: Ship-Confirm@amazon.com <ship-confirm@amazon.com>');
    $('#render4').text(' To: ' + prank.name + '  ' + prank.email);
    $('#render5').text(' Shipping Confirmation.');
    $('#render6').text(' Hello ' + prank.name + ' ');
    $('#render7').text('  ' + prank.item + ' have shipped!');
    $('#render8').text(' Details');
    $('#render9').text(' Order #002-0025687-7655223');
    $('#render10').text(' Expected Delivery Date:                             Shipped To:');
    $('#render11').text('  ' + prank.date + '                                  ' + prank.address);
    $('#render12').text('                                                       ' + prank.city + ', ' + prank.state + ' ' + prank.zip);
    $('#render13').text(' Total Before Tax: $' + (prank.itemPrice * prank.howMany).toFixed(2));
    $('#render14').text(' Tax Collected: $' + prank.tax);
    $('#render15').text(' Shipment Total:  $' + prank.total);
    $('#render16').text(' Return or replace your items in Your Orders.');
    $('#render17').text(' We hope you come again soon.');
    $('#render18').text(' Amazon.com.');
    console.log('renderAmzn ship notice is working');
  };

$('#amznprank').click(function(e){
    var x = createAmzn();
    calcAmznCost(x);
    renderAmzn();
});
