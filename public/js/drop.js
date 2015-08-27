var p = $('p');
p.each(function(){
    var t = $(this).text().replace(/\s/g, unescape('%a0')); /* Spaces collapse, so make them non-breaking */
    var o = '';
    for(var i = 0; i< t.length; i++){
        o += '<span class="normal">' + t[i] + '</span>';
    }
    $(this).html(o);
});

function lift(){
  $('.fallen').removeClass('fallen').addClass('normal');
  window.setTimeout(drop, 60);
}

function drop(){
  var s = $('span.normal');
  if (s.length == 0){
   window.setTimeout(lift, 10000);
   return;
  }

  s.eq(Math.floor(Math.random() *   s.length)).addClass('fallen').removeClass('normal');
  window.setTimeout(drop, 60);
}

drop();
