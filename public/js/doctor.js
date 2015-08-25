// var pform = require('./prankforms.js');

$(function(){
  var doctorModule = function(){
      var createDoctor = function(e){
        var  = document.getElementById('#name').value,
        var email = document.getElementById('#email').value,
        var doctorSpecialty = document.getElementById('#doctorSpecialty').value,
        var dayOfWeek = document.getElementById('#dayOfWeek').value,
        var hospitalName = document.getElementById('#hospitalName').value,
        var secretaryName = document.getElementById('#secretaryName').value,
        var doctorWebSite = document.getElementById('#doctorWebSite').value,

        console.log('taking in form data ' + name + ' ' + email)
      };
      var renderDoctor = function(e){
        $('#middle').text(name + ' ' + email + 'Your appointment reminder');
        $('#middle2').text('Dear ' + name + ', This is your ' + doctorSpecialty + ' office confirming your appointment for this ' + dayOfWeek + '.  Please arrive fifteen minutes early to fill out the patient registration paperwork.  Here at ' + hospitalName + ' we value you as a patient and look forward to providing your health care needs.  Sincerely, ' + secretaryName + ', patient services coordinator');
        $('#middle3').text('If you are unable to make it to your appointment please contact us here.' + doctorWebSite);
        console.log('writing the middle section');
      };
      $('#btn-click').on('click', createDoctor);
      $('#btn-click').on('click', renderDoctor);
  };
})();

exports.doctorModule = doctorModule;
