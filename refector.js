
var html = '';
var rgbColor;


for(var i = 1; i <= 10; i++ ){
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';

document.write(html);
}

function changeColor(color1, color2, color3){
	Math.floor(Math.random() * 256 );
	rgbColor = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';

}

changeColor(red, green, blue);