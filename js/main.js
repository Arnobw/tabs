//klok en datum xD

var span = document.getElementById('klok');
var spann = document.getElementById('datum');

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
  span.textContent = h + ":" + m + ":" + s;
  spann.textContent= dag + " " + maand_dag +  " " + n + " " + jaar;
}

setInterval(time, 1000);

// ---------------------------------------------------------------------------------------

//jquery moment....

$.get('https://api.openweathermap.org/data/2.5/weather?q=Tienen,be&appid=c0f39dfd1294407009096cbd062acd62&units=metric', function(data){
 var temp = data.main.temp;
 //console.log(temp)
 var weer = data.weather[0].main;
 //console.log(weer);
 var meer_weer = data.weather[0].description;


  $('#temp').text("°C " + temp);
  $('#weer').text( meer_weer + "!");
});







//geleend :v) van https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript
function unix(ux){
  var date = new Date(ux*1000);
// Hours part from the timestamp
var hours = date.getHours();
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);
}

unix(time);
//test




