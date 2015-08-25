var pform = require('./prankforms.js');

$(function(){
  var amznModule = function(){
      var createAmzn = function(e){
        var name = document.getElementById('#name').value,
        var email = document.getElementById('#email').value,
        var item = document.getElementById('#item').value,
        var address = document.getElementById('#address').value,
        var city = document.getElementById('#city').value,
        var state = document.getElementById('#state').value,
        var zip = document.getElementById('#zip').value,
        console.log('taking in form data ' + name + ' ' + email)
      };
      var renderAmzn = function(){
        $('#middle').text(name + ' ' + email + 'Your Amazon.com order of  ' + item + ' has shipped!');
        $('#middle2').text('Hello ' + name + 'Order #002-0025687-7655223 will be shipped to ' + address + city + ', ' + state + ' ' + zip)
        $('#middle3').text('Return or replace your items in Your Orders.')
        console.log('writing the middle section');
      };
      $('#btn-click').on('click', createAmzn);
      $('#btn-click').on('click', render)
  };
})();

exports.amznModule = amznModule;
