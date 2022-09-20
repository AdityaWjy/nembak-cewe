/*MY FIRST JAVASCRIPT PROJECT not changing it if it works it works right :D*/
var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
$(function () {

  showText("#msg", "Terminal", 0, 100);
  showText("#msg1", "km mau jadi pacarku ga?", 0, 100);
});
 $(document).ready(function () {
            setTimeout("$('#fname').focus();", 500);
});

/*var answered = document.getElementById('fname').value;
alert("ÿou answered" + answered);
var answer = function () {
    switch(answered){
        case "help":
          alert("typed help!");
        break;
        default:
          alert("urhm");
    }
}*/

function checkforblank(){
  if (document.getElementById('fname').value == "Mau") {
    
    showText("#msg2", 'Peraturan Pacaran:', 0, 100);
    showText("#msg3", '#1 Prot Prot tiap ketemu :)', 0, 100);
    showText("#msg4", '#2 Cium.perdetik', 0, 100);
    showText("#msg5", '#3 Harus bisa duo vs madara', 0, 100);
    showText("#msg6", '#4 Nangkap Bjirka', 0, 100);
    showText("#msg7", '#5 gagalin puan jadi presiden', 0, 100);
    return false; 
  }
  else{
    alert('dasarr monyett!');
    return false;
  }
  
}

var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosize);
             
function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:0; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}
$(function() {
    $('textarea').on('keypress', function(e) {
        if (e.which == 32)
            return false;
    });
});
setTimeout(function(){
   $("textarea").text("Mau");
},2500); // 3 second delay

setTimeout(function(){
   $("textarea").text("Atau");
},4000); // 3 second delay


setTimeout(function(){
   $("textarea").text("Engga");
},5500); // 3 second delay


setTimeout(function(){
   $("textarea").text("");
},7500); // 3 second delay