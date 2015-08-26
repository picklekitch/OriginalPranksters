
 var createDoctor = function(e){
  var name= document.getElementById('#name').value;
  var email = document.getElementById('#email').value;
  var doctorSpecialty = document.getElementById('#doctorSpecialty').value;
  var dayOfWeek = document.getElementById('#dayOfWeek').value;
  var hospitalName = document.getElementById('#hospitalName').value;
  var secretaryName = document.getElementById('#secretaryName').value;
  var doctorWebSite = document.getElementById('#doctorWebSite').value;

  console.log('taking in form data ' + name + ' ' + email);
      };
  var renderDoctor = function(e){
    $('#middle').text(createDoctor.name + ' ' + createDoctor.email + 'Your appointment reminder');
    $('#middle2').text('Dear ' + createDoctor.name + ', This is your ' + createDoctor.doctorSpecialty + ' office confirming your appointment for this ' + createDoctor.dayOfWeek + '.  Please arrive fifteen minutes early to fill out the patient registration paperwork.  Here at ' + createDoctor.hospitalName + ' we value you as a patient and look forward to providing your health care needs.  Sincerely, ' + createDoctor.secretaryName + ', patient services coordinator');
    $('#middle3').text('If you are unable to make it to your appointment please contact us here.' + createDoctor.doctorWebSite);
    console.log('writing the middle section');
  };

  $('#doctorprank').on('click', function(e){
  var x = createDoctor();
  renderDoctor();
});

