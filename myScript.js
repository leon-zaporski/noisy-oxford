function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

var lenarr = 100000
var indices = Array.from(Array(lenarr).keys())
var white_n = [];
for (var i = 0; i < indices.length; i++) {
     white_n.push(randn_bm());
}

TESTER = document.getElementById('tester');
	Plotly.plot( TESTER, [{
	x: indices,
	y: white_n }], {
	margin: { t: 0 } } );
