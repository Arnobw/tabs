var klok = document.getElementById('klok');
var datum = document.getElementById('datum');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var dag = d.getDay();
  var maand_dag = d.getDate();
  var jaar = d.getFullYear();
  
  switch (dag) {
    case 0:
      dag = "Zondag";
      break;
    case 1:
      dag = "Maandag";
      break;
    case 2:
       dag = "Dinsdag";
      break;
    case 3:
      dag = "Woensdag";
      break;
    case 4:
      dag = "Donderdag";
      break;
    case 5:
      dag = "Vrijdag";
      break;
    case 6:
      dag = "Zaterdag";
  }

var dd = new Date();
var month = new Array();
month[0] = "Januari";
month[1] = "Februari";
month[2] = "Maart";
month[3] = "April";
month[4] = "Mei";
month[5] = "Juni";
month[6] = "Juli";
month[7] = "Augustus";
month[8] = "September";
month[9] = "Oktober";
month[10] = "November";
month[11] = "December";
var n = month[dd.getMonth()];

  if (h<10){
      h = '0' + h;
  }

  if (m<10){
    m = '0' + m;
}

if (s<10){
    s = '0' + s;
}
  klok.textContent = h + ":" + m + ":" + s;
  datum.textContent= dag + " " + maand_dag +  " " + n + " " + jaar;
}

setInterval(time, 1000);





