var v1 = prompt("Enter Radius","");
var r = parseInt(v1);

var p = 2*Math.PI*r;
var result = Math.round(p);
document.write("Perimeter is = " + result);