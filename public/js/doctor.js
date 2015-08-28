var prankDoctor = {name: '', email: '', doctorSpecialty: '', dayOfWeek: '', hospitalName: '', secretaryName: '', doctorWebSite: ''};

 var createDoctor = function(e){
  prankDoctor.name = document.getElementById('name').value;
  prankDoctor.email = document.getElementById('email').value;
  prankDoctor.doctorSpecialty = document.getElementById('doctorSpecialty').value;
  prankDoctor.dayOfWeek = document.getElementById('dayOfWeek').value;
  prankDoctor.hospitalName = document.getElementById('hospitalName').value;
  prankDoctor.secretaryName = document.getElementById('secretaryName').value;
  prankDoctor.doctorWebSite = document.getElementById('doctorWebSite').value;

  console.log('taking in form data ' + prankDoctor.name + ' ' + prankDoctor.email);
};

  var renderDoctor = function(e){
    $('#middle1').text('This is an appointment reminder for ' + prankDoctor.name + '. (' + prankDoctor.email + ')');
    $('#middle2').text('Dear ' + prankDoctor.name + ',');
    $('#middle3').text('This is your ' + prankDoctor.doctorSpecialty + ' office confirming your appointment for this ' + prankDoctor.dayOfWeek + '.');
    $('#middle4').text(' Please arrive fifteen minutes early to fill out the patient registration paperwork.  Here at ' + prankDoctor.hospitalName);
     $('#middle5').text(' we value you as a patient and look forward to providing your health care needs.  Sincerely,');
    $('#middle6').text(prankDoctor.secretaryName + ', patient services coordinator');
    $('#middle7').text('If you are unable to make it to your appointment please contact us by clicking the link to our website. ');
    $('#middle8').text(prankDoctor.doctorWebSite);
      console.log('writing the middle section');
  };


  $('#doctorprank').on('click', function(e){
  console.log("hello");
  createDoctor();
  renderDoctor();
});


