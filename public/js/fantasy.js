var pform = require('./prankforms.js');

$(function(){
  var fantasyModule = function(){
      var createFantasy = function(e){
        var name = document.getElementById('#name').value;
        var email = document.getElementById('#email').value;
        var teamName = document.getElementById('#teamName').value;
        var playerName = document.getElementById('#playerName').value;
        var injury = document.getElementById('#injury').value;
        var leagueName = document.getElementById('#leagueName').value;
        console.log('taking in form data ' + name + ' ' + email);
      };
      var renderFantasy = function(e){
        $('#middle').text(name + ' ' + email + 'Fantasy Football  ' + leagueName + ' - injury update!');
        $('#middle2').text('Hello ' + name + ', ' + playerName + 'in your league' + leagueName 'is out for the year with a confirmed torn ACL. ' playerName + 'will require season-ending surgery. We suggest dropping this player ASAP.');
        $('#middle3').text('--Fantasy Football Commissioner');
          console.log('writing the middle section');
      };
        $('#btn-click').on('click', createFantasy);
        $('#btn-click').on('click', renderFantasy);
  };
})();

exports.fantasyModule = fantasyModule;
