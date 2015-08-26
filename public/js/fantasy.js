// var pform = require('./prankforms.js');
  // var fantasyModule = function(){
    var createFantasy = function(e){
      var name = document.getElementById('name').value;
      console.log(name);
      var email = document.getElementById('email').value;
      console.log(email);
      var teamName = document.getElementById('teamName').value;
      console.log(teamName);
      var playerName = document.getElementById('playerName').value;
      console.log(playerName);
      var leagueName = document.getElementById('leagueName').value;
      console.log('taking in form data ' + name + ' ' + email);
    };

    var renderFantasy = function(e){
      $('#middle').text(createFantasy.name + ' ' + createFantasy.email + 'Fantasy Football  ' + createFantasy.leagueName + ' - injury update!');
      $('#middle2').text('Hello ' + createFantasy.name + ' ' + createFantasy.playerName + 'in your league ' + createFantasy.leagueName + 'is out for the year with a confirmed torn ACL. ' + createFantasy.playerName + 'will require season-ending surgery. We suggest dropping this player ASAP.');
      $('#middle3').text('--Fantasy Football Commissioner');
        console.log('writing the middle section');
    };

$('#fantasyprank').on('click', function(e){
  var x = createFantasy();
  renderFantasy();
});



