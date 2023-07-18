            /*NEWBOT*/
            
function greatspeak() {
  var a = document.getElementsByClassName("greating");
  for (var b = 0; b < a.length; b++) { 
   a[b].style.display = 'none'; } 
   
  var c = document.getElementsByClassName("enjoyed");
  for (var d = 0; d < c.length; d++) {
   c[d].style.display = 'inline'; 
 }
document.getElementById("user-speak-imfin").
style.display ="inline-block";
document.getElementById("newbot-speak-youen").
style.display ="inline";
}
function enjoyedspeak() {
  var e = document.getElementsByClassName("enjoyed");
  for (var f = 0; f < e.length; f++) { 
   e[f].style.display = 'none'; } 
   
   var g = document.getElementsByClassName("moreaboutmyactivities");
   for (var h = 0; h < g.length; h++) {
   g[h].style.display = 'inline';
}
document.getElementById("user-speak-yeshave").
style.display ="inline-block";
document.getElementById("newbot-speak-thank").
style.display ="inline";
}
function myactivities() {
  var i = document.getElementsByClassName("moreaboutmyactivities");
  for (var j = 0; j < i.length; j++) { 
   i[j].style.display = 'none';
}
document.getElementById("user-speak-canyou").
style.display ="inline-block";
document.getElementById("newbot-speak-yeslook").
style.display ="inline";
}

            /*FIGAME*/
function myActivites() {

document.getElementById("newbot-article").
style.display="inline";
document.getElementById("figame-body").
style.display="none";
document.getElementById("time").
innerHTML=Date();
document.getElementById("newbot-body").
style.display ="block";
document.getElementById("figameact").
style.display ="block";}

function fiGame(){

document.getElementById('figame-body').
style.display="block";
document.getElementById('newbot-body').
style.display="none";
document.getElementById('footer').
style.display="block";
document.getElementById('figameact').
style.display="none";
document.getElementById("newbot-article").
style.display="none";}
