//Globals
var resize = null,
	limitSm = 640,
	limitMd = 960,
	limitLg = 1280;

// Screen sized reloading:
window.onload = logistics();
window.onresize = function(){
    if (resize != null) {
        clearTimeout(resize);
    }
    resize = setTimeout(function(){
        logistics();
    }, 750);
}
function logistics() {
	var cw = document.documentElement.clientWidth;
		if (cw < limitSm) {
		loadSm(cw);
	} else if (cw < limitMd) {
		loadMd(cw);
	} else if (cw < limitLg) {
		loadLg(cw);
	} else {
		loadXl(cw);
	}
}
function loadSm(cw) {
	var output = document.getElementById('output');
	output.innerHTML = "Small Screen, width reported as: "+cw+"px";
}
function loadMd(cw) {
	var output = document.getElementById('output');
	output.innerHTML = "Medium Screen, width reported as: "+cw+"px";
}
function loadLg(cw) {
	var output = document.getElementById('output');
	output.innerHTML = "Large Screen, width reported as: "+cw+"px";
}
function loadXl(cw) {
	var output = document.getElementById('output');
	output.innerHTML = "XLarge Screen, width reported as: "+cw+"px";
}