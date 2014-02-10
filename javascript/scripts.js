//Globals
var resize = null,
	limitSm = 768,
	limitMd = 960,
	limitLg = 1280,
	loadedSm = false,
	loadedMd = false,
	loadedLg = false,
	loadedXl = false;

// Screen sized reloading:
window.onload = logistics();
window.onresize = function(){
    if (resize != null) {
        clearTimeout(resize);
    }
    resize = setTimeout(function(){
        //console.log("window resized");
        logistics();
    }, 750);
}
function logistics() {
	var cw = document.documentElement.clientWidth;
	if (cw < limitSm) {
		if(!loadedSm) {
			loadSm();
			loadedSm = true;
		}
	} else if (cw < limitMd) {
		if(!loadedMd){
			loadMd();
			loadedMd = true;
		}
	} else if (cw < limitLg) {
		if(!loadedLg){
			loadLg();
			loadedLg = true;
		}
	} else {
		if(!loadedXl){
			loadXl();
			loadedXl = true;
		}
	}
}
function loadSm() {
	$("#output").text('Small screen, width reported as: '+document.documentElement.clientWidth+"px");
	//console.log("load the scripts for small screens");
}
function loadMd() {
	$("#output").text('Medium screen, width reported as: '+document.documentElement.clientWidth+"px");
	//console.log("load the scripts for medium screens");
}
function loadLg() {
	$("#output").text('Large screen, width reported as: '+document.documentElement.clientWidth+"px");
	//console.log("load the scripts for large screens");
}
function loadXl() {
	$("#output").text('XLarge screen, width reported as: '+document.documentElement.clientWidth+"px");
	//console.log("load scripts for extra large screens");
}