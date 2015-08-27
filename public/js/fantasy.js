// Fantasy Sports Prank

var prank = {name: '', email: '', teamName: '', playerName: '', leagueName: ''};


var createFantasy = function(e){
    prank.name = document.getElementById('name').value;
    console.log(name);
    prank.email = document.getElementById('email').value;
    console.log(email);
    prank.teamName = document.getElementById('teamName').value;
    console.log(teamName);
    prank.playerName = document.getElementById('playerName').value;
    console.log(playerName);
    prank.leagueName = document.getElementById('leagueName').value;
    console.log('taking in form data ' + prank.name + '  ' + prank.email);
    };

var renderFantasy = function(e){
    $('#render').text(prank.name + ' ' + prank.email + '   Fantasy Football  ' + prank.leagueName + ' - injury update!');
    $('#render2').text('Hello ' + prank.name + ' ' + prank.playerName + ' in your league ' + prank.leagueName + ' is out for the year with a confirmed torn ACL. ' + prank.playerName + ' will require season-ending surgery. We suggest dropping this player ASAP!!');
    $('#render3').text('--Fantasy Football Commissioner');
    console.log('renderFantasy writing prank email is working');
    };

$('#fantasyprank').on('click', function(e){
    var x = createFantasy();
    renderFantasy();
});



