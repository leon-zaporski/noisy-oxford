

var lenarr = 100
var indices = Array.from(Array(lenarr).keys())

var white_n = [];
for (var i = 0; i < indices.length; i++) {
     white_n.push(Math.round(Math.random()));
}

TESTER = document.getElementById('tester');
	Plotly.plot( TESTER, [{
	x: indices,
	y: white_n }], {
	margin: { t: 0 } } );
